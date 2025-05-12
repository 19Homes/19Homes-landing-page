'use client'
import { createContext } from "react";

type ActiveLinkContextType = {
  activeLinkIndex: number;
  setActiveLinkIndex: (linkIndex: number) => void;
};

const defaultState: ActiveLinkContextType = {
  activeLinkIndex: 0,
  setActiveLinkIndex: () => {},
};

export const activeLinkContext =
  createContext<ActiveLinkContextType>(defaultState);
