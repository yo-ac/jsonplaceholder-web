import Button from "../../../components/ui/GenericButton"

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaHome } from 'react-icons/fa';

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: {
        street: string;
        city: string;
        suite: string;
    };
    company: {
        name: string;
    }
}

type Props = {
    params: { id: string };
}

export default async function Detalles({ params }: Props) {
    const { id } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user: User = await res.json();
    console.log(user)

    return (
        <div className="max-w-xl mx-auto p-4 border my-5 rounded-lg mt-50">
            <h1 className="font-bold text-2xl">{user.name}</h1>
            <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                    <div className='flex flex-row gap-2 items-center'>
                        <FaEnvelope />
                        <p className="cursor-pointer underline hover:text-blue-500">{user.website}</p>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <FaPhone />
                        <p className="cursor-pointer">{user.phone}</p>
                    </div>
                </div>
                <div className="flex flex-row gap-1">
                    <div>
                        <FaMapMarkerAlt />
                    </div>
                    <div className='flex flex-row gap-1'>
                        <p className="text-sm">{user.address.street}, </p>
                        <p className="text-sm"> {user.address.city}, </p>
                        <p className="text-sm"> {user.address.suite}</p>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-1">
                    <FaHome />
                    <p className="text-sm">{user.company.name}</p>
                </div>
            </div>
            <div className="flex flex-row gap-2 justify-end">
                <Button className="border" url="users" label="Volver"/>
                <Button className="bg-purple-500 text-white" url="posts" label="Ver Posts"/>
            </div>
        </div>
    )
}