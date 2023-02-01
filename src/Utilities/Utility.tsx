import { HOME_LABEL, BOOKS_LABEL, MOVIES_LABEL } from "../Constants/dictionary";
import { AppUrls } from "../ Types/Apptypes";
const { v4: uuidv4 } = require("uuid");

export const NavBarElements = [
  {
    navbar_element: HOME_LABEL,
    to: AppUrls.HOME,
  },
  {
    navbar_element: BOOKS_LABEL,
    to: AppUrls.BOOKS,
  },
  {
    navbar_element: MOVIES_LABEL,
    to: AppUrls.MOVIES,
  },
];

export const UsersDatabase = [
  {
    id: uuidv4(),
    name: "John",
    surname: "Brown",
    email: "john.brown@gmail.co.uk",
    address: "57 Kingston Hill",
  },
  {
    id: uuidv4(),
    name: "Radio",
    surname: "Martini",
    email: "radio.martini@gmail.com",
    address: "Lungomare Leonardo Da Vinci, 8",
  },
  {
    id: uuidv4(),
    name: "Margarette",
    surname: "Boyer",
    email: "margarette.boyer@gmail.com",
    address: "2370 Dunwin Dr",
  },
];
