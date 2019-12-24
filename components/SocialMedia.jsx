import React from "react";
import { SocialIcon } from "react-social-icons";

/**
 * Social Media for footer
 * &nbsp; => bad practice but oh wells
 */
const SocialMedia = () => {
  return (
    <div>
      <SocialIcon
        bgColor="#0321e8"
        url="https://www.facebook.com/justin.oh.1088"
        style={{ height: 15, width: 15 }}
        target="_blank"
      />
      &nbsp;
      <SocialIcon
        bgColor="#d6bb58"
        url="https://www.instagram.com/_justinwastaken/"
        style={{ height: 15, width: 15 }}
        target="_blank"
      />
      &nbsp;
      <SocialIcon
        bgColor="#030303"
        url="https://github.com/Joh1996"
        style={{ height: 15, width: 15 }}
        target="_blank"
      />
    </div>
  );
};

export default SocialMedia;
