"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import CommentForm from "./CommentForm";
import type { Comment } from "@/lib/types";

export default function CommentSection({
  initialComments,
  postId,
}: {
  initialComments: Comment[];
  postId: number;
}) {
  const queryClient = useQueryClient();
  const { data: comments = initialComments, isLoading, error } = useQuery({
    queryKey: ["comments", postId],
    queryFn: async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      if (!res.ok) throw new Error("Error al cargar los comentarios");
      return res.json();
    },
    initialData: initialComments,
  });

  const  handleNewComment =  async (newComment: Comment) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newComment),
        }
      );
      if (!res.ok) throw new Error("Error al enviar el comentario");
      const savedComment = await res.json();

      // Actualizamos el caché localmente (sin usar mutate)
      queryClient.setQueryData<Comment[]>(["comments", postId], (old) =>
        old ? [savedComment, ...old] : [savedComment]
      );

    } catch (err) {
      console.error(err);
      alert("Hubo un error al enviar el comentario");
    }
  };

  if (isLoading) return <p>Cargando comentarios...</p>;
  if (error) return <p>Error al cargar los comentarios</p>;

  return (
    <div className="mt-5">
      <strong className="text-red-500">Comentarios ({comments.length})</strong>

      {comments.map((c : Comment) => (
        <div key={c.id} className="border-b p-4">
          <p className="text-lg font-semibold">
            {c.name.charAt(0).toUpperCase() + c.name.slice(1)}
          </p>
          <p className="text-sm text-gray-600">{c.body}</p>
        </div>
      ))}

      <CommentForm postId={postId} onAddComment={handleNewComment} />
    </div>
  );
}
