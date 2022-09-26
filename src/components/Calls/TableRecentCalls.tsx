import { useState } from "react";
import { ButtonActionType } from "../../utils/componentTypes";
import ContactInfo from "../Contact/Contact-Info";
import TabletContactView from "../Contact/Tablet-Contact-View";
import ButtonDropdown from "../Custom/BtnDrodown";
import MobileCallList from "./Mobile view/MobileCallsList";

const TableRecentCalls = () => {
  const [recentCallDetails, setRecentCallDetail] = useState<any>();
  const [tabletContactInfo, setTabletContactInfo] = useState<any>(null);

  const sendMessage = () => {
    console.log("send message");
  };

  const buttonActions: ButtonActionType[] = [
    {
      actionName: "View Details",
      actionFunc: () => {
        if (window.innerWidth > 1024) {
          setRecentCallDetail({
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
      actionFunc: sendMessage,
    },
    {
      actionName: "Add To Contact",
      actionFunc: () => {},
    },
    {
      actionName: "Add To Favorite",
      actionFunc: () => {},
    },
  ];

  return (
    <section id="Recent-Calls-List" className="flex items-start">
      {window.innerWidth > 768 ? (
        <table
          className={`table-fixed w-${
            recentCallDetails ? "[70%]" : "full"
          } pr-4`}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile No</th>
              <th>Call Status</th>
              <th>Time</th>
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
              <td className="text-green-600 flex items-center justify-center space-x-2">
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
                    d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                  />
                </svg>

                <span>Incoming</span>
              </td>
              <td>12:30 PM</td>
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
            <tr>
              <td className="flex items-center space-x-2">
                <div className="contact-avatar w-[40px] h-[40px] rounded-full overflow-hidden">
                  <img
                    src={require("../../assets/users/100_13.jpg")}
                    className="w-full"
                    alt=""
                  />
                </div>
                <h6 className="font-medium">Jack Yorr</h6>
              </td>
              <td>054 043 03322</td>
              <td className="text-blue-600 flex items-center justify-center space-x-2">
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
                    d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                  />
                </svg>

                <span>Outgoing</span>
              </td>
              <td>12:30 PM</td>
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

                <button type="button">
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
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr>
              <td className="flex items-center space-x-2">
                <div className="contact-avatar w-[40px] h-[40px] rounded-full overflow-hidden">
                  <img
                    src={require("../../assets/users/100_14.jpg")}
                    className="w-full"
                    alt=""
                  />
                </div>
                <h6 className="font-medium">Richard King</h6>
              </td>
              <td>054 043 03322</td>
              <td className="text-red-600 flex items-center justify-center space-x-2">
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
                    d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                  />
                </svg>

                <span>Missed</span>
              </td>
              <td>12:30 PM</td>
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
        <MobileCallList />
      )}

      <ContactInfo
        contactInfo={recentCallDetails}
        setContactInfo={setRecentCallDetail}
      />

      <TabletContactView tabletContactInfo={tabletContactInfo} />
    </section>
  );
};

export default TableRecentCalls;
