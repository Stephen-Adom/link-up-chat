const ChatBoxHeader = () => {
  return (
    <>
      <div className="header py-2 px-5 border-b border-gray-200 flex items-center justify-between">
        <section className="flex items-center space-x-4">
          <div className="user-avatar w-[50px] h-[50px] rounded-full overflow-hidden">
            <img
              src={require("../../assets/users/100_1.jpg")}
              className="w-full"
              alt="user"
            />
          </div>
          <div>
            <h6 className="font-bold text-lg">Steve Williams</h6>
            <div className="flex items-center space-x-3">
              <span className="block text-sm font-medium text-gray-500">
                Offline
              </span>
              <span className="block text-sm font-medium text-gray-500">
                Last seen 3 hours ago
              </span>
            </div>
          </div>
        </section>

        <div className="flex items-center space-x-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default ChatBoxHeader;
