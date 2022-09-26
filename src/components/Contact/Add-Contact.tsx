import { useRef } from "react";
import { hideContactDialog } from "../../hooks/contact-reducer/contact.reducer";
import { useAppSelector } from "../../hooks/hooks";
import { useAppDispatch } from "./../../hooks/hooks";

const AddContact = () => {
  const dialogState = useAppSelector((state) => state.contact.addContactDialog);
  const dispatch = useAppDispatch();
  const AddContactRef = useRef<HTMLDivElement>(null);

  dialogState
    ? AddContactRef.current?.classList.remove("hideElement")
    : AddContactRef.current?.classList.add("hideElement");
  return (
    <section
      id="Add-Contact-Section"
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center hideElement"
      ref={AddContactRef}
    >
      <div className="add-contact-form-container w-[90%] sm:w-[90% md:w-[80%] lg:w-[50%] bg-white rounded-lg">
        <div className="card-header px-6 py-4 flex items-center justify-between border-b border-gray-200">
          <div className="card-title">
            <h5 className="card-label font-medium text-xl">Add Contact</h5>
          </div>

          <div className="card-toolbar">
            <button
              type="button"
              className="bg-transparent p-2 border border-gray-200 rounded-full hover:bg-gray-300"
              onClick={() => dispatch(hideContactDialog())}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="card-body p-5">
          <form action="">
            <div className="flex flex-col items-center justify-center">
              <div className="image-upload w-[100px] h-[100px] border border-gray-200 rounded-full overflow-hidden cursor-pointer">
                <img
                  src={require("../../assets/users/blank.png")}
                  className="w-full"
                  alt=""
                />
              </div>
              <h6 className="font-medium">Upload Contact Profile</h6>
            </div>

            <div className="form-content">
              <div className="form-group mb-3 col-span-3 sm:col-span-3 md:col-span-1">
                <label htmlFor="firstname">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Enter your first name"
                />
              </div>

              <div className="form-group mb-3 col-span-3 sm:col-span-3 md:col-span-1">
                <label htmlFor="middlename">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  Middle Name
                </label>
                <input
                  type="text"
                  id="middlename"
                  name="middlename"
                  placeholder="Enter your middle name"
                />
              </div>

              <div className="form-group mb-3 col-span-3 sm:col-span-3 md:col-span-1">
                <label htmlFor="lastname">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Enter your last name"
                />
              </div>

              <div className="form-group mb-3 col-span-3">
                <label htmlFor="organization">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                    />
                  </svg>
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  placeholder="Enter your company / organization"
                />
              </div>

              <div className="form-group mb-3 col-span-3">
                <label htmlFor="mobilenumber">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  Mobile Number
                </label>
                <div className="flex items-center gap-x-3 w-full">
                  <input
                    type="text"
                    id="mobilenumber"
                    name="mobilenumber"
                    placeholder="Enter mobile number"
                  />
                  <button
                    type="button"
                    className="border border-gray-300 bg-gray-300 px-5 py-2 rounded-md"
                  >
                    Add
                  </button>
                </div>
              </div>

              <div className="form-group mb-3 col-span-3 sm:col-span-3 md:col-span-1">
                <label htmlFor="email">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group mb-3 col-span-3 sm:col-span-3 md:col-span-1">
                <label htmlFor="address">
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
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Enter your address"
                />
              </div>

              <div className="form-group mb-3 col-span-3 sm:col-span-3 md:col-span-1">
                <label htmlFor="group">
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
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                  Group
                </label>
                <select name="group" id="group">
                  <option value="" disabled>
                    Select group
                  </option>
                </select>
              </div>

              <div className="form-group mb-3 col-span-3">
                <label htmlFor="note">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  Note
                </label>
                <textarea
                  name="note"
                  id="note"
                  placeholder="Enter your bio or any note"
                  cols={3}
                ></textarea>
              </div>
            </div>

            <div className="mb-3 flex justify-center mt-[30px]">
              <button
                type="button"
                className="px-5 py-3 bg-primaryColor border-none w-max flex items-center gap-x-2 text-white rounded-lg font-medium"
              >
                Add Contact
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddContact;
