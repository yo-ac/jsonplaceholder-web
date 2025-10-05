// 'use client';
import Button from "./GenericButton";
import {
    ItemGroup,
    Item,
    ItemContent,
    ItemTitle,
    ItemDescription,
    // ItemActions,
    ItemSeparator
} from "@/components/ui/item";
import { useRouter } from 'next/navigation';

type Post = {
    title: string;
    body: string;
    id: number;
}

interface PostListProps {
    posts: Post[]
}

export default function PostList({ posts }: PostListProps) {
    const router = useRouter(); 
    const verPost = (id: number) => {
        router.push(`/posts/${id}`)
    }

    return (
        <ItemGroup className="cursor-pointer" >
            {posts?.map(post => (
                <Item key={post.id} className="gap-10" onClick={() => verPost(post.id)}>
                    <ItemContent>
                        <ItemTitle className="text-xl">{post.title.charAt(0).toUpperCase() + post.title.slice(1)}</ItemTitle>
                        <ItemDescription>{post.body}</ItemDescription>
                    </ItemContent>
                    <ItemSeparator />
                </Item>
            ))}
        </ItemGroup>
    );
}