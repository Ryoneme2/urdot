import React from "react";
import * as Component from "../components";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#0F1217] to-[#15162c]">
        <Component.Navbar />
        <div className="flex flex-grow flex-col items-center justify-center">
          {children}
        </div>
      </main>
    </>
  );
};

export default MainLayout;
