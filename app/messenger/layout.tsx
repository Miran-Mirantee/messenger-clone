import getMessengerList from "../actions/getMessengerList";
import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getMessengerList();
  const users = await getUsers();
  return (
    <Sidebar>
      <ConversationList users={users} initialItems={conversations} />
      <div className="h-full ">{children}</div>
    </Sidebar>
  );
}
