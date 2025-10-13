// components/ClientLayout.tsx
'use client';

import React from "react";
import { useSession } from "next-auth/react";
import FullScreenLoader from "./FullScreenLoader";
import Navbar from "./Navbar";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { status } = useSession();

  if (status === "loading") return <FullScreenLoader />;

  return (
    <>
      <Navbar/>
      <main className="pt-2">{children}</main>
    </>
  );
};

export default ClientLayout;
