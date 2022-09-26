import ChatBoxHeader from "./ChatBoxHeader";
import SendMessageForm from "./SendMessageForm";

const ChatBoxContainer = () => {
  return (
    <div className="chat-box-container">
      <ChatBoxHeader />
      <div className="chat-messages min-h-[500px] overflow-y-auto p-4 relative">
        <div className="recipient-message flex items-start space-x-4">
          <section>
            <div className="user-avatar w-[45px] h-[45px] rounded-full overflow-hidden">
              <img
                src={require("../../assets/users/100_1.jpg")}
                className="w-full"
                alt="user"
              />
            </div>
            <span className="block text-sm font-medium mt-1">09:00</span>
          </section>
          <section className="">
            <div className="recipient-message-box ">Hi there, How are you?</div>

            <div className="recipient-message-box mt-1">
              Waiting for your reply. As I have to go back soon. I have to
              travel long distance.
            </div>
          </section>
        </div>

        <div className="sender-message flex items-start justify-end mt-6">
          <section className="flex flex-col items-end mr-4">
            <div className="sender-message-box">Hi there, How are you?</div>

            <div className="sender-message-box mt-1">
              Hi, I am coming there in few minutes. Please wait!! I am in taxi
              right now
            </div>
          </section>
          <section>
            <div className="user-avatar w-[45px] h-[45px] rounded-full overflow-hidden">
              <img
                src={require("../../assets/users/100_2.jpg")}
                className="w-full"
                alt="user"
              />
            </div>
            <span className="block text-sm font-medium mt-1">09:00</span>
          </section>
        </div>

        {/** SEND MESSAGE FORM */}
        <SendMessageForm />
        {/** SEND MESSAGE FORM */}
      </div>
    </div>
  );
};

export default ChatBoxContainer;
