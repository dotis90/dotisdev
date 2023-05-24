import React from "react";
import { SocialIcon } from "react-social-icons";

const Social = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 pb-10">
      <SocialIcon url="https://www.linkedin.com/in/danieljotis/" />
      <SocialIcon
        bgColor="white"
        url="https://github.com/dotis90"
      />
      <SocialIcon url="https://www.facebook.com/dan.otis.10420/" />
      <SocialIcon url="https://twitter.com/Dotis90" />
    </div>
  );
};

export default Social;
