import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        Made with <FontAwesomeIcon icon={faHeart} /> by Frida
      </div>
    );
  }
}

export default Footer;
