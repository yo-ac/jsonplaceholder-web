// import CommentForm from "@/components/ui/CommentForm";
import CommentSection from "@/components/ui/CommentSection";


type Post = {
    title: string;
    body: string;
    id: number;
}

type Props = {
    params: { id: string };
}


export default async function Publicacion({ params }: Props) {
    const { id } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    const post : Post = await res.json()
    const comment = await comments.json();
    console.log(comment)
    console.log(post)

    return (
        <div className="max-w-2xl mx-auto my-10">
            <h1 className="text-4xl">{post.title.charAt(0).toUpperCase() + post.title.slice(1)}</h1>
            <p className="mt-4">{post.body.charAt(0).toUpperCase()+post.body.slice(1)}.</p>
             <CommentSection initialComments={comment} postId={post.id} />
        </div>
    )
}