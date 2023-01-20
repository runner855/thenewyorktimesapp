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
}

export interface ArticlesProps {
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
