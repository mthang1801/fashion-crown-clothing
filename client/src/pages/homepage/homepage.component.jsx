import React from "react";
// import "./homepage.styles.scss";
import Directory from "../../components/directory-menu/directory-menu.component";
import {HomepageContainer} from "./homepage.styles.jsx"
const HomePage = () => {
  return (
    <HomepageContainer>
      <Directory/>
    </HomepageContainer>
  );
};

export default HomePage;