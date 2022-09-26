import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { showContactDialog } from "../../../hooks/contact-reducer/contact.reducer";
import { useAppDispatch } from "../../../hooks/hooks";

const AddContactButton = () => {
  const dispatch = useAppDispatch();

  return (
    <section
      id="AddFloatingButton"
      className="w-[75px] h-[75px] rounded-full fixed flex items-center justify-center md:hidden"
      onClick={() => dispatch(showContactDialog())}
    >
      <FontAwesomeIcon icon="user-plus" className="text-white text-lg" />
    </section>
  );
};

export default AddContactButton;
