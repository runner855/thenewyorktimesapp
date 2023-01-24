import React, { useState } from "react";
import "../NavBar/NavBar.css";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ModalContentEnum } from "../../ Types/Apptypes";
import {
  MODAL_LOGIN_LABEL,
  MODAL_SIGNUP_LABEL,
  MODAL_SIGNUPLINK_LABEL,
} from "../../Constants/dictionary";
import { Modal, Select } from "antd";
import { LoginForm } from "../LoginForm/LoginForm";
import { NavBarElements, UsersDatabase } from "../../Utilities/Utility";
import { Link } from "react-router-dom";
import { getValue } from "@testing-library/user-event/dist/utils";

type UserDetailsProps = {
  id: string;
  name: string;
  surname: string;
  email: string;
  address: string;
};

export const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showContent, setShowContent] = useState<string>("");
  const [userName, setUserName] = useState<string | undefined>();
  const [isloggedin, setIsLoggedIn] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>();
  const [userAddress, setUserAddress] = useState<string>();

  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <FaUser
            className="login"
            type="primary"
            onClick={() => {
              setIsModalOpen(true);
              setShowContent(ModalContentEnum.LOGIN);
            }}
          >
            {MODAL_LOGIN_LABEL}
          </FaUser>
          <div className="username">{userName}</div>
          <Modal
            title="Login"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            {showContent === ModalContentEnum.LOGIN ? (
              <div className="login_select">
                <Select
                  className="form-control"
                  placeholder="select"
                  style={{ width: 130 }}
                  onChange={(val: string) => setUserName(val)}
                  onSelect={() =>
                    UsersDatabase &&
                    UsersDatabase.map((item, index) => {
                      setIsLoggedIn(true);
                      return setUserAddress(item.address);
                    })
                  }
                  value={userName}
                  options={
                    UsersDatabase &&
                    UsersDatabase.map((username) => ({
                      label: `${username.name} ${username.surname}`,
                      value: `${username.name} ${username.surname}`,
                    }))
                  }
                />
                {isloggedin && (
                  <div className="accountdetails_container">
                    Account Details:
                    <div className="accountdetails_container_username">
                      User: {userName}
                    </div>
                    <div className="accountdetails_container_email">
                      Email: {userEmail}
                    </div>
                    <div className="accountdetails_container_address">
                      Address: {userAddress}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <LoginForm />
              </>
            )}

            <div className="noaccount">{MODAL_SIGNUP_LABEL}</div>
            <div
              onClick={() => {
                setShowContent(ModalContentEnum.REGISTER);
              }}
            >
              <p>
                <Link to="#" className="signup">
                  {MODAL_SIGNUPLINK_LABEL}
                </Link>
              </p>
            </div>
          </Modal>
        </div>
        <div className="menu-icon" onClick={handleShowNavBar}>
          <GiHamburgerMenu />
        </div>
        <div className={`nav-elements ${showNavBar && "active"}`}>
          <ul>
            {NavBarElements.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.to}>{item.navbar_element}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
