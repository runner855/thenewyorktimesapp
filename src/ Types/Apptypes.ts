export enum AppUrls {
  HOME = "/home",
  BOOKS = "/books",
  MOVIES = "/movies",
}

export enum LanguageEnum {
  EN = "en",
}

export enum ModalContentEnum {
  LOGIN = "Login",
  REGISTER = "Register",
  LOGOUT = "Logout",
  SUBMIT = "Submit",
  CLEAR = "Clear",
  ACCOUNT_DETAILS = "Account Details",
}

export interface ArticlesProps {
  id: string;
  copyright: string;
  last_updated: string;
  num_results: number;
  abstract: string;
  byline: string;
  created_date: string;
  section: string;
  title: string;
  item_type: string;
  multimedia: MultimediaProps[];
}

export interface MultimediaProps {
  caption: string;
  copyright: string;
  format: string;
  height: number;
  subtype: string;
  type: string;
  url: string;
  width: number;
}

export interface UserProps {
  id: string;
  name: string;
  surname: string;
  email: string;
  address: string;
  city: string;
  country: string;
}

export interface ArticleDetailsProps {
  id: string;
  copyright: string;
  last_updated: string;
  num_results: number;
  abstract: string;
  byline: string;
  created_date: string;
  section: string;
  title: string;
  item_type: string;
  multimedia: MultimediaProps[];
}
