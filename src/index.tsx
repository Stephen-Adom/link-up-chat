import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Chats from "./pages/Chats";
import Contact from "./pages/Contacts";
import ContactList from "./components/Contact/ContactList";
import RecentCalls from "./pages/Calls";
import Favorites from "./pages/Favorites";
import { Provider } from "react-redux";
import { store } from "./hooks/store";

library.add(fab, far, fas);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/login" replace={true}></Navigate>}
          ></Route>

          <Route path="/" element={<App />}>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="link-up" element={<Home />}>
              <Route path="chats" element={<Chats />}></Route>
              <Route path="contacts" element={<Contact />}>
                <Route path="all" element={<ContactList />}></Route>
                <Route path="calls" element={<RecentCalls />}></Route>
                <Route path="favorites" element={<Favorites />}></Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
