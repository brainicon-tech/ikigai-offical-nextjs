import React from "react";
import Home from "./components/Home";
import AOSWrapper from "./components/AosWrapper";

/**
 * This is the main homepage application.
 * In Next.js, `page.js` is the default file rendered for a route.
 * This file corresponds to the root route "/".
 */
export default function Page() {
  return (
    <>
    <AOSWrapper>
      <Home></Home>
    </AOSWrapper>
    </>
  );
}
