import { HOME_LABEL, BOOKS_LABEL, MOVIES_LABEL } from "../Constants/dictionary";
import { AppUrls } from "../ Types/Apptypes";

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
