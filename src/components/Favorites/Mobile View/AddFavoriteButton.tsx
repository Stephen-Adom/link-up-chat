const AddFavoriteButton = () => {
  return (
    <section
      id="AddFloatingButton"
      className="w-[75px] h-[75px] rounded-full fixed flex items-center justify-center md:hidden"
    >
      <img
        src={require("../../../assets/images/add-favourite.webp")}
        className="w-[40%] invert"
        alt="add favorite icon"
      />
    </section>
  );
};

export default AddFavoriteButton;
