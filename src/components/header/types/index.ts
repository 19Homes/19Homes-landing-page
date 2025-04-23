import { ReactElement } from "react";

export type navigationLink = {
  text: string;
  path: string;
  hasChild: boolean;
  child: null | ReactElement;
};
