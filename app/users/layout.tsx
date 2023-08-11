import Sidebar from "../components/sidebar/Sidebar";
import UserList from "./components/UserList";
import getUsers from "../actions/getUsers";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();

  return (
    <Sidebar>
      <UserList items={users} />
      <div className="h-full">{children}</div>
    </Sidebar>
  );
}
