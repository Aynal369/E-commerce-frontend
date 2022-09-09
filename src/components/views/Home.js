import React from "react";
import ShowProducts from "../containers/ShowProducts";
import NotificationBar from "../containers/NotificationBar";

const Home = () => {
  return (
    <>
      <NotificationBar />
      <main className="my-5">
        <ShowProducts />
      </main>
    </>
  );
};

export default Home;
