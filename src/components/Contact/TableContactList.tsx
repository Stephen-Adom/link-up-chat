import { ButtonActionType } from "../../utils/componentTypes";
import ButtonDropdown from "../Custom/BtnDrodown";

const TableContactList = ({ viewContactInfo }: any) => {
  const buttonActions: ButtonActionType[] = [
    {
      actionName: "Make a Call",
      actionFunc: () => {},
    },
    {
      actionName: "Send Message",
      actionFunc: () => {},
    },
    {
      actionName: "Add To Favorite",
      actionFunc: () => {},
    },
  ];

  return (
    <section id="table-contact-list">
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Organization / Occupation</th>
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
            <td>Freelancer</td>
            <td>054 043 03322</td>
            <td>cherylhanson@gmail.com</td>
            <td>Co-worker</td>
            <td className="flex items-center justify-center space-x-2">
              <button
                onClick={viewContactInfo}
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
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
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
                  src={require("../../assets/users/100_10.jpg")}
                  className="w-full"
                  alt=""
                />
              </div>
              <h6 className="font-medium">Cheryl Hanson</h6>
            </td>
            <td>Freelancer</td>
            <td>054 043 03322</td>
            <td>cherylhanson@gmail.com</td>
            <td>Co-worker</td>
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
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
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
                  src={require("../../assets/users/100_11.jpg")}
                  className="w-full"
                  alt=""
                />
              </div>
              <h6 className="font-medium">Cheryl Hanson</h6>
            </td>
            <td>Freelancer</td>
            <td>054 043 03322</td>
            <td>cherylhanson@gmail.com</td>
            <td>Co-worker</td>
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
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>

              <ButtonDropdown buttonActions={buttonActions} />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default TableContactList;
