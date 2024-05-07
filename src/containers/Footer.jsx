import React from "react";
import logo from '../assets/logo.svg'
import { footerLinks } from "../.constants";

const Footer = () => {
  return (
    <div className="bg-footer sm:px-16 px-6 py-16 ">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-gradient text-[50px] text-bold font-manrope leading-[60px] max-w-[700px] mb-8">Do you want to step in to the future before others</h1>
        <button type="button" className="border-2 p-4  font-manrope font-bold text-white cursor-pointer">Request Early Access</button>
      </div>
      <div className="py-6 flex sm:flex-row flex-col">
        <div className="mt-2">
          <img src={logo} alt="logo" />
          <p className="text-white max-w-[200px]">Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="flex justify-between w-full sm:flex-row flex-col">
          {footerLinks.map((item, index)=>(
            <div className="flex flex-col sm:ml-14 max-sm:mt-6">
              <p className="text-gradient font-semibold">{item.title}</p>
              <ul className="text-dimBlue cursor-pointer">
                {item.links.map((link, index)=>(
                  <li>{link.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center w-full justify-center mt-4">
        <p className="flex font-semibold text-gradient">© 2024 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
