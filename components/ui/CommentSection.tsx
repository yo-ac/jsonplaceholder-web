"use client";

import { useState } from "react";
import CommentForm from "./CommentForm";
import type { Comment } from "@/lib/types";


export default function CommentSection({ initialComments, postId }: { initialComments: Comment[], postId: number }) {
  const [comments, setComments] = useState(initialComments);

  const handleNewComment = (newComment: Comment) => {
    setComments((prev) => [newComment, ...prev]);
  };

  return (
    <div className="mt-5">
      <strong className="text-red-500">Comentarios ({comments.length})</strong>
      {comments.map((c) => (
        <div key={c.id} className="border-b p-4">
          <p className="text-lg font-semibold">{c.name.charAt(0).toUpperCase() + c.name.slice(1)}</p>
          <p className="text-sm text-gray-600">{c.body}</p>
        </div>
      ))}

      <CommentForm postId={postId} onAddComment={handleNewComment} />
    </div>
  );
}
