import UserScreen from "@/components/ui/UserListScreen";

export default async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // Se pasa la data inicial al componente cliente
  return <UserScreen initialData={data} />;
}
