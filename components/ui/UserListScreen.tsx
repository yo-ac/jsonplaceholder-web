'use client';
// import { useQuery } from "@tanstack/react-query";
import { useState } from 'react'
import UsersList from "@/components/ui/UserList";
import Image from "next/image";
import NoData from "../../src/images/55024599_9264885.jpg"
import Link from "next/link";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
};

export default function UserScreen({ initialData }: { initialData: User[] }) {
    const [filter, setFilter] = useState<string>('')
    console.log(filter)
    const filteredUsers = initialData?.filter(u => u.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) || u.username.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) || []; //Filtra los usuarios segun el contenido de la variable filter

    return (
        <div className="max-w-xl mx-auto my-4">
            <div className="flex flex-col items-center gap-3 mx-4 my-4">
                <h1 className="font-bold text-4xl">Usuarios</h1>
            </div>
            <div className="flex flex-row justify-between mx-4 items-center">
                {/* Link a listado de posts */}
                <Link href={`/posts`} className="font-bold underline">Ver Posts</Link>
                {/* Input de busqueda */}
                <input type="text" placeholder="Buscar usuario" className="p-2 border rounded-lg outline-none" onChange={(e) => setFilter(e.target.value)}></input>
            </div>

            {/* Renderizamos el componente UserList por cada usuario dentro de la variable filteredUsers */}
            {filteredUsers.length > 0 ? <UsersList users={filteredUsers} />
                :
                <div className="flex flex-col mt-30">
                    <Image src={NoData} alt="no-results" className="h-80 w-90 mx-auto"></Image>
                    <p className="text-center flex flex-row justify-center items-center text-xl">No se ha encontrado usuarios con tus criterios de busqueda</p>
                </div>
            }
        </div>
    )

}
