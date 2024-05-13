import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";

const SocialMedia = () => {
  const iconStyle = {
    background: "#fff", // Light color
    color: "#333", // Dark color
    fontSize: "2.5rem", // Adjust icon size as needed
  };

  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/shivanshu877/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin style={iconStyle} />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/shivanshu877"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub style={iconStyle} />
        </a>
      </div>
      <div>
        <a
          href="https://leetcode.com/u/vashudev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode style={iconStyle} />
        </a>
      </div>
      <div>
        <a
          href="https://www.hackerrank.com/profile/vashudev8777"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaHackerrank style={iconStyle} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
