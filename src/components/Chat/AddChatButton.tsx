const AddChatButton = () => {
  return (
    <section
      id="AddFloatingButton"
      className="w-[75px] h-[75px] rounded-full fixed flex items-center justify-center md:hidden"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8  stroke-2 stroke-white"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    </section>
  );
};

export default AddChatButton;
