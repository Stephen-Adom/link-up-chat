import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <section
      id="Navigation-section"
      className="bg-white border-b border-gray-200 md:border-none md:white-shadow py-[25px] md:py-[15px]"
    >
      <div className="container flex items-center justify-between w-[85%] mx-auto">
        <h4>Link-Up</h4>

        <section className="flex items-center space-x-10">
          <div className="navigation-links hidden md:flex items-center font-medium text-sm">
            <NavLink
              to="/link-up/chats"
              className="nav-link px-[30px] py-[12px]"
            >
              CHAT
            </NavLink>
            <NavLink
              to="/link-up/contacts"
              className="nav-link px-[30px] py-[12px]"
            >
              CONTACTS
            </NavLink>
            <NavLink
              to="/link-up/settings"
              className="nav-link px-[30px] py-[12px]"
            >
              SETTINGS
            </NavLink>
          </div>

          <div className="space-x-4">
            <button type="button">
              <FontAwesomeIcon
                icon="magnifying-glass"
                className="text-gray-600"
              />
            </button>
            <button type="button">
              <FontAwesomeIcon
                icon={["far", "bell"]}
                className="text-gray-600"
              />
            </button>
            <button type="button">
              <FontAwesomeIcon
                icon="arrow-right-from-bracket"
                className="text-gray-600"
              />
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Navigation;
