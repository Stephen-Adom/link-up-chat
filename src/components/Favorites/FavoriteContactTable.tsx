import { useState } from "react";
import { ButtonActionType } from "../../utils/componentTypes";
import ContactInfo from "../Contact/Contact-Info";
import TabletContactView from "../Contact/Tablet-Contact-View";
import ButtonDropdown from "../Custom/BtnDrodown";
import FavoriteListMobile from "./Mobile View/FavoriteListMobile";

const FavoriteContactTable = () => {
  const [favoriteDetails, setfavoriteDetails] = useState<any>();
  const [tabletContactInfo, setTabletContactInfo] = useState<any>(null);

  const buttonActions: ButtonActionType[] = [
    {
      actionName: "View Details",
      actionFunc: () => {
        if (window.innerWidth > 1024) {
          setfavoriteDetails({
            name: "John Doe Contact",
            mobile: "000 000 0000",
          });
        } else {
          setTabletContactInfo({ name: "John Doe", mobile: "000 000 0000" });
        }
      },
    },
    {
      actionName: "Send Message",
      actionFunc: () => {},
    },
    {
      actionName: "Remove From Favorite",
      actionFunc: () => {},
    },
  ];

  return (
    <section id="favorite-Contact-Table" className="flex items-start">
      {window.innerWidth > 768 ? (
        <table
          className={`table-fixed w-${favoriteDetails ? "[70%]" : "full"} pr-4`}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile No</th>
              <th>Email</th>
              <th>Group</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="flex items-center space-x-2">
                <div className="contact-avatar w-[40px] h-[40px] rounded-full overflow-hidden">
                  <img
                    src={require("../../assets/users/100_12.jpg")}
                    className="w-full"
                    alt=""
                  />
                </div>
                <h6 className="font-medium">Cheryl Hanson</h6>
              </td>
              <td>054 043 03322</td>
              <td>example@gmail.com</td>
              <td>Family</td>
              <td className="flex items-center justify-center space-x-2">
                <button
                  type="button"
                  className="bg-secondaryColor w-[30px] h-[30px] rounded-lg flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 stroke stroke-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </button>

                <ButtonDropdown buttonActions={buttonActions} />
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <FavoriteListMobile />
      )}

      <ContactInfo
        contactInfo={favoriteDetails}
        setContactInfo={setfavoriteDetails}
      />

      <TabletContactView tabletContactInfo={tabletContactInfo} />
    </section>
  );
};

export default FavoriteContactTable;
