import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-sky-800 text-white p-4 fixed bottom-0 left-0 right-0 ">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Mystery-Number
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
