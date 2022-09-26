import ChatBox from "../components/Chat/ChatBox";
import ChatList from "../components/Chat/ChatList";

const Chats = () => {
  return (
    <section id="chat-section" className="relative">
      <ChatList></ChatList>
      <ChatBox></ChatBox>
    </section>
  );
};

export default Chats;
