import React from "react";

function Layout({ children }) {
  window.scrollTo(0, 0);
  return <main id="main">{children}</main>;
}

export default Layout;
