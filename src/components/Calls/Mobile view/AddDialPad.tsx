const AddDialPad = () => {
  return (
    <section
      id="AddFloatingButton"
      className="dial-pad w-[75px] h-[75px] rounded-full fixed flex items-center justify-center md:hidden"
    >
      <img
        src={require("../../../assets/images/dial-pad.png")}
        className="w-[40%] invert"
        alt="dial-pad"
      />
    </section>
  );
};

export default AddDialPad;
