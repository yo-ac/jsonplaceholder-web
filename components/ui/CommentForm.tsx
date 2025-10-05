"use client";

import { useState } from "react";
import { Comment } from "@/lib/types"


// type Comment = {
//   name: string;
//   body: string;
//   postId: number;
//   userId: number;
// };

type CommentFormProps = {
    postId: number;
    onAddComment: (comment: Comment) => void;
};

export default function CommentForm({ postId, onAddComment }: CommentFormProps) {
    const [comment, setComment] = useState<string>("");
    const [title, setTitle] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Nuevo comentario:", comment);

        const res = await fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            body: JSON.stringify({
                postId: postId,
                name: title,
                body: comment,
                userId: 101,

            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const newComment = await res.json();
        onAddComment({
            ...newComment,
            id: Date.now(), // asegura unicidad en las keys al crear comentarios seguidos con el mismo usuario
        });
        setTitle("");
        setComment("");
        alert("Comentario enviado exitosamente")
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 p-3">
            <div className="flex flex-col">
                <label>Titutlo</label>
                <input type="text" placeholder="Escribe tu titulo" value={title} className="border rounded-md p-2" required onChange={(e) => setTitle(e.target.value)}></input>

            </div>
            <div className="flex flex-col">
                <label>Añadir comentario</label>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Escribe tu comentario..."
                    className="border p-2 rounded-md"
                    required
                />
            </div>

            <div className="flex justify-end">
                <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded-md w-40 cursor-pointer">
                    Enviar
                </button>
            </div>
        </form>
    );
}
