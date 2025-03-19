import React from "react";
import { FaLinkedinIn, FaGithub, FaFacebookF, FaInstagram } from "react-icons/fa";

function SocialIcons() {
  const iconClasses =
    "p-3 md:p-4 rounded-full bg-darkBlue dark:bg-lightBlue hover:bg-primaryBlue dark:hover:bg-primaryBlue text-white dark:text-darkBlue text-xl";

  return (
    <React.Fragment>
      <ul className="flex text-sm justify-center">
        <li className="mr-2">
          <a href="https://www.linkedin.com/in/kadenbking" target={"blank"} aria-label="LinkedIn">
            <div className={iconClasses}>
              <FaLinkedinIn />
            </div>
          </a>
        </li>
        <li className="mr-2">
          <a href="https://www.github.com/kadenbking" target={"blank"} aria-label="Github">
            <div className={iconClasses}>
              <FaGithub />
            </div>
          </a>
        </li>
        <li className="mr-2">
          <a
            href="https://www.facebook.com/profile.php?id=100007899587355"
            target={"blank"}
            aria-label="Facebook"
          >
            <div className={iconClasses}>
              <FaFacebookF />
            </div>
          </a>
        </li>
        <li className="mr-2">
          <a
            href="https://www.instagram.com/kingkaden__/?hl=en"
            target={"blank"}
            aria-label="Instagram"
          >
            <div className={iconClasses}>
              <FaInstagram />
            </div>
          </a>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default SocialIcons;
