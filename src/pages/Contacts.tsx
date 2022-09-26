import { useCallback } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AddContact from "../components/Contact/Add-Contact";
import ContactCategory from "../components/Contact/Contact-Category";
import ButtonDropdown from "../components/Custom/BtnDrodown";
import { showContactDialog } from "../hooks/contact-reducer/contact.reducer";
import { useAppDispatch } from "../hooks/hooks";
import { ButtonActionType } from "../utils/componentTypes";

const Contact = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const PageTitle = useCallback(() => {
    switch (location.pathname) {
      case "/link-up/contacts/all":
        return `All Contacts(30)`;
      case "/link-up/contacts/calls":
        return `Recent Calls(4)`;
      case "/link-up/contacts/favorites":
        return `My Favorites(10)`;

      default:
        return `All Contacts`;
    }
  }, [location]);

  const buttonActions: ButtonActionType[] = [
    {
      actionName: "My Favorites",
      actionFunc: () =>
        navigate("/link-up/contacts/favorites", {
          replace: true,
        }),
    },
    {
      actionName: "Settings",
      actionFunc: () => {},
    },
  ];

  return (
    <section
      id="contact-section"
      className="pt-[20px] sm:pt-[20px] md:pt-[40px]"
    >
      <div className="flex items-start sm:items-start md:items-center justify-end flex-col sm:flex-col md:flex-row md:justify-center lg:justify-between  chat-page-title md:flex-wrap pb-4 px-3 sm:px-3 md:px-4">
        <section className="flex items-center justify-between w-full sm:w-full md:w-max">
          <h1 className="tracking-wide text-3xl font-medium">{PageTitle()}</h1>

          <section className="block sm:block md:hidden">
            <ButtonDropdown buttonActions={buttonActions} />
          </section>
        </section>

        <div className="search-contact-container relative w-full sm:w-full md:w-[75%] lg:w-[45%] mx-auto mt-4 sm:mt-3 md:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-gray-500 absolute top-[12px] left-[18px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            name="contact-search"
            placeholder="Search Contact by name / email / phonenumber"
          />
        </div>

        <div className="contact-actions items-center space-x-4 md:mt-4 lg:mt-0 hidden sm:hidden md:flex">
          <button
            type="button"
            className="add-contact-btn"
            onClick={() => dispatch(showContactDialog())}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>

            <span>Add Contact</span>
          </button>
          <button type="button" className="import-contact-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
              />
            </svg>

            <span>Import Contact</span>
          </button>
        </div>
      </div>

      <section className="mt-5 contact-container">
        <ContactCategory />
        <div className="contact-list-outlet">
          <Outlet />
        </div>
      </section>

      {/** ADD CONTACT PAGE */}
      <AddContact />
      {/** ADD CONTACT PAGE */}
    </section>
  );
};

export default Contact;
