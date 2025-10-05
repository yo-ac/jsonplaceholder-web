import {
    ItemGroup,
    Item,
    ItemContent,
    ItemTitle,
    ItemDescription,
    ItemActions,
    ItemSeparator
} from "@/components/ui/item";

import { redirect } from "next/navigation";


type User = {
    id: number;
    name: string;
    username: string;
    email: string;
};

interface UsersListProps {
    users: User[];
}


export default function UsersList({ users }: UsersListProps) {

    const handleClick = (id: number) => {
        redirect(`/users/${id}`)
    }


    return (
        <ItemGroup>
            {users?.map(user => (
                <Item key={user.id}>
                    <ItemContent>
                        <ItemTitle className="text-xl">{user.name}</ItemTitle>
                        <ItemDescription>Username: {user.username}</ItemDescription>
                        <ItemDescription>Email: {user.email}</ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <button className="btn btn-sm border p-2 rounded-lg cursor-pointer border-white bg-purple-600 text-white" onClick={()=>handleClick(user.id)}>Detalles</button>
                    </ItemActions>
                    <ItemSeparator />
                </Item>
            ))}
        </ItemGroup>
    );
}
