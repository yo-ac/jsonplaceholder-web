'use client';
import { useRouter } from 'next/navigation';

export default function Button({url, className, label}: {className:string, url:string, label:string}) {
    const router = useRouter();
    return (
        <button
            className= {`${className} rounded-lg p-2 mt-3 cursor-pointer`}
            onClick={() => router.push(`/${url}`)}
        >
            {label}
        </button>
    );
}
