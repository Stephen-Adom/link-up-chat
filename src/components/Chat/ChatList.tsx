const ChatList = () => {
  return (
    <div className="user-chat-list">
      <div className="flex items-center justify-between chat-page-title pb-4 px-4">
        <h1 className="tracking-wide text-3xl font-medium">Messages</h1>

        <div className="user-avatar w-[50px] h-[50px] rounded-full overflow-hidden">
          <img
            src={require("../../assets/users/100_1.jpg")}
            className="w-full"
            alt="user"
          />
        </div>
      </div>

      <div className="search-box relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 stroke-gray-500 absolute top-[11px] left-[20px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input
          type="text"
          className="chat-search-control"
          placeholder="Search"
        />
      </div>

      <div className="chat-list-card mt-6 divide-y">
        <div className="user-chat ">
          <section className="flex items-center space-x-4">
            <div className="user-avatar w-[60px] h-[60px] md:w-[50px] md:h-[50px] rounded-full overflow-hidden">
              <img
                src={require("../../assets/users/100_1.jpg")}
                className="w-full"
                alt="user"
              />
            </div>
            <div>
              <h6 className="font-bold text-xl sm:text-xl md:text-base">
                John Doe
              </h6>
              <span className="block text-md sm:text-md md:text-sm text-gray-500">
                Hi there, How are you?
              </span>
            </div>
          </section>
          <div className="flex flex-col items-end">
            <span className="block text-sm mb-2 font-bold">09:00</span>
            <span className="w-5 h-5 rounded-full bg-primaryColor text-white text-xs flex items-center justify-center">
              3
            </span>
          </div>
        </div>

        <div className="user-chat ">
          <section className="flex items-center space-x-4">
            <div className="user-avatar w-[60px] h-[60px] md:w-[50px] md:h-[50px] rounded-full overflow-hidden">
              <img
                src={require("../../assets/users/100_2.jpg")}
                className="w-full"
                alt="user"
              />
            </div>
            <div>
              <h6 className="font-bold text-xl sm:text-xl md:text-base">
                John Doe
              </h6>
              <span className="block text-md sm:text-md md:text-sm text-gray-500">
                Hi there, How are you?
              </span>
            </div>
          </section>
          <div className="flex flex-col items-end">
            <span className="block text-sm mb-2 font-bold">09:00</span>
            <span className="w-5 h-5 rounded-full bg-primaryColor text-white text-xs flex items-center justify-center">
              3
            </span>
          </div>
        </div>

        <div className="user-chat ">
          <section className="flex items-center space-x-4">
            <div className="user-avatar w-[60px] h-[60px] md:w-[50px] md:h-[50px] rounded-full overflow-hidden">
              <img
                src={require("../../assets/users/100_3.jpg")}
                className="w-full"
                alt="user"
              />
            </div>
            <div>
              <h6 className="font-bold text-xl sm:text-xl md:text-base">
                John Doe
              </h6>
              <span className="block text-md sm:text-md md:text-sm text-gray-500">
                Hi there, How are you?
              </span>
            </div>
          </section>
          <div className="flex flex-col items-end">
            <span className="block text-sm mb-2 font-bold">09:00</span>
            <span className="w-5 h-5 rounded-full bg-primaryColor text-white text-xs flex items-center justify-center">
              3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
