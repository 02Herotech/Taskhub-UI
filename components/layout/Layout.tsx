import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className={`flex min-h-[100vh] flex-col justify-stretch items-stretch`}
    >
      <main className={`grow`}>{children}</main>
    </div>
  );
};

export default Layout;
