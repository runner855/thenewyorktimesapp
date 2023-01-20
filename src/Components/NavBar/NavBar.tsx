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
import { Modal } from "antd";
import { LoginForm } from "../LoginForm/LoginForm";
import { NavBarElements } from "../../Utilities/Utility";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showContent, setShowContent] = useState<string>("");

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
          <Modal
            title="Login"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            {showContent === ModalContentEnum.LOGIN ? (
              <div className="login_select">
                <select className="form-control">
                  <h4>Choose Your Account</h4>
                  <option>John</option>
                  <option>Mike</option>
                  <option>Mario</option>
                </select>
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
