import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChatBoxContainer from "./ChatBoxContainer";

const ChatBox = () => {
  return (
    <div className="chat-box">
      <div className="container">
        <ChatBoxContainer />

        <div className="recipient-information-container">
          <div className="recipient-avatar w-[120px] h-[120px] rounded-full overflow-hidden">
            <img
              src={require("../../assets/users/100_1.jpg")}
              className="w-full"
              alt="user"
            />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 tracking-wider text-center mt-4">
            Steve Williams
          </h1>
          <span className="block text-gray-500 text-md font-bold">
            stevewiliams@gmail.com
          </span>
          <span className="block text-gray-500 text-md font-medium">
            054 043 2333
          </span>

          <p className="bio-info border-t border-gray-200 px-2 py-4 text-center font-medium tracking-wide mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </p>

          <div className="additional-info border-t border-gray-200 px-2 py-4 text-left w-full">
            <li className="flex items-center space-x-3 hover:cursor-pointer">
              <FontAwesomeIcon icon={["far", "heart"]} />
              <span>Add to Favorites</span>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
