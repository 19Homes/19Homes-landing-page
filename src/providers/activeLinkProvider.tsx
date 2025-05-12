'use client'
import { activeLinkContext } from "@/contexts/activeLinkContext";
import { ReactNode, useState } from "react";
import UseActiveLinkIndex from "@/components/header/hooks/useActiveLink";
export default function ActiveLinkProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeLinkIndex, setActiveLinkIndex] = useState(UseActiveLinkIndex());
  return (
    <activeLinkContext.Provider value={{ activeLinkIndex, setActiveLinkIndex }}>
      {children}
    </activeLinkContext.Provider>
  );
}
