import PostListScreen from "@/components/ui/PostsListScreen";

export default async function Posts(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return <PostListScreen initialData={data}/>;
}