import { ReactElement } from "react";

export type navigationLink = {
  text: string;
  path: string;
  hasChild: boolean;
  child?: ReactElement;
};

export type headerButtonTypes = {
  classnames: string;
  text: string;
  path: string;
};
