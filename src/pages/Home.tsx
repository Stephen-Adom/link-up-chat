import Navigation from "../components/Home/Navigation";
import { Outlet, useLocation } from "react-router-dom";
import MobileFooter from "../components/Home/MobileFooter";
import AddChatButton from "../components/Chat/AddChatButton";
import AddContactButton from "../components/Contact/Mobile View/AddContactButton";
import AddDialPad from "../components/Calls/Mobile view/AddDialPad";
import AddFavoriteButton from "../components/Favorites/Mobile View/AddFavoriteButton";

const Home = () => {
  const location = useLocation();

  const renderfloatingButton = () => {
    switch (location.pathname) {
      case "/link-up/chats":
        return <AddChatButton />;

      case "/link-up/contacts/all":
        return <AddContactButton />;

      case "/link-up/contacts/calls":
        return <AddDialPad />;

      case "/link-up/contacts/favorites":
        return <AddFavoriteButton />;

      default:
        break;
    }
  };

  return (
    <section id="home-section" className="w-full min-h-screen bg-white">
      <div className="container-full position">
        <Navigation />

        <section className="w-[95%]  xl:w-[85%] mx-auto">
          <Outlet />
        </section>

        {renderfloatingButton()}

        <MobileFooter />
      </div>
    </section>
  );
};

export default Home;
