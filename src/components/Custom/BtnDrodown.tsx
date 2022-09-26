import React, { MouseEventHandler } from "react";
import { useState } from "react";
import { ButtonActionType } from "../../utils/componentTypes";

export type ButtonDropdownType = {
  buttonActions: ButtonActionType[];
};

const ButtonDropdown = (props: ButtonDropdownType) => {
  const [showDrodown, setDropdown] = useState<boolean>(false);
  const { buttonActions } = props;
  document.documentElement.addEventListener("click", (e) => {
    if ((e.target as HTMLButtonElement).tagName !== "svg") {
      setDropdown(false);
    }
  });

  return (
    <div className="btn-dropdown relative">
      <button
        type="button"
        className="btn btn-drpdwn"
        onClick={() => setDropdown((current) => (current = !showDrodown))}
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
            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
          />
        </svg>
      </button>
      {showDrodown && (
        <>
          {buttonActions.length && (
            <div className="dropdown-menu">
              <>
                {buttonActions.map((action, index) => {
                  return (
                    <React.Fragment key={index}>
                      <li
                        className="dropdown-item"
                        onClick={
                          action.actionFunc as MouseEventHandler<HTMLLIElement>
                        }
                      >
                        {action.actionName}
                      </li>
                    </React.Fragment>
                  );
                })}
              </>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ButtonDropdown;
