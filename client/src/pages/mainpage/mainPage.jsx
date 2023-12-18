import React, { useState } from "react";
import MuseumMenu from "../../components/MuseumMenu/MuseumMenu";
import Navbar from "../../components/Navbar/Navbar";
import "./mainPage.css";

const MainPage = () => {
  const [isInfoVisible, setInfoVisible] = useState(false);

  const museums = [
    {
      id: 1,
      name: "Car Museum",
      text: `Roam through the virtual museum halls, and interact with a variety 
             of vintage and modern vehicles, learning about their history and 
             engineering significance.`,
      route: "/museum",
    },
    {
      id: 2,
      name: "Museum 2",
      text: `This is the description for Museum 2.`,
      route: "/museum",
    },
    {
      id: 3,
      name: "Museum 3",
      text: `This is the description for Museum 3.`,
      route: "/museum",
    },
    {
      id: 4,
      name: "Museum 4",
      text: `This is the description for Museum 4.`,
      route: "/museum",
    },
  ];

  const handleShowInfoClick = () => {
    setInfoVisible((prevState) => !prevState);
  };

  return (
    <>
      <Navbar
        isInfoVisible={isInfoVisible}
        onShowControlsClick={handleShowInfoClick}
      />
      <div className="main-page">
        {museums.map((museum) => (
          <MuseumMenu key={museum.id} museum={museum} className="museum-menu" />
        ))}
      </div>
    </>
  );
};

export default MainPage;
