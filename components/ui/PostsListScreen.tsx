'use client'
import PostListScreen from "@/components/ui/PostList"
// import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import { Post } from "@/lib/types"
import {
    Pagination,
    PaginationContent,
    PaginationLink,
    PaginationItem,
    PaginationPrevious,
    PaginationNext,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";


export default function PostList({ initialData }: { initialData: Post[] }) {

    const router = useRouter()
    console.log(initialData)
    const [filter, setFilter] = useState<string>('')
    const [sortOption, setSortOption] = useState("default");


    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;


    const filteredPosts = initialData?.filter(p => p.title.includes(filter.toLowerCase()))

    const sortedPosts = useMemo(() => {
        const posts = [...initialData];
        switch (sortOption) {
            case "asc":
                return posts.sort((a, b) => a.title.localeCompare(b.title));
            case "desc":
                return posts.sort((a, b) => b.title.localeCompare(a.title));
            default:
                return posts;
        }
    }, [initialData, sortOption]);

    const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const visiblePosts = sortedPosts.slice(startIndex, startIndex + postsPerPage);


    return (
        <div className="max-w-2xl mx-auto my-5">
            <h1 className="m-5 font-bold text-center text-4xl">Publicaciones</h1>
            <div className="mx-4 flex flex-row justify-between mb-5">
                <div className=" flex items-center">
                    <strong className="underline cursor-pointer" onClick={() => router.push('/users')} >Ver Usuarios</strong>
                </div>
                <div className="flex flex-row gap-3">
                    <select
                        value={sortOption}
                        onChange={(e) => {
                            setSortOption(e.target.value);
                            setCurrentPage(1); // Reinicia a la página 1 al cambiar orden
                        }}
                        className="text-sm outline-none"
                    >
                        <option value="default">Ordenar por defecto</option>
                        <option value="asc">Título (A → Z)</option>
                        <option value="desc">Título (Z → A)</option>

                    </select>

                    <input type="text" onChange={(e) => setFilter(e.target.value)} className="border rounded-lg p-2" placeholder="Buscar Publicación" />
                </div>

            </div>
            {
                //Logica para renderizar el componente de acuerdo a si el usuario ha utilizado el input o de lo contrario, se muestran todos los post visibles
                filter.length > 0 ? <PostListScreen posts={filteredPosts} /> : <PostListScreen posts={visiblePosts} />
            }
            <Pagination className="mt-6">
                <PaginationContent className="flex justify-center gap-2">
                    {/* Botón anterior */}
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                            aria-disabled={currentPage === 1}
                            className={currentPage === 1 ? "opacity-50 pointer-events-none" : ""}
                        />
                    </PaginationItem>

                    {/* Números de página */}
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <PaginationItem key={index}>
                            <PaginationLink
                                isActive={currentPage === index + 1}
                                onClick={() => setCurrentPage(index + 1)}
                            >
                                {index + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}

                    {/* Botón siguiente */}
                    <PaginationItem>
                        <PaginationNext
                            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                            aria-disabled={currentPage === totalPages}
                            className={currentPage === totalPages ? "opacity-50 pointer-events-none" : ""}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}