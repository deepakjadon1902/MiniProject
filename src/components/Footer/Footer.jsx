import React from "react";
import StoreBenefits from "../Utilities/StoreBenefits";

import GoogleStore from "../../assets/google-store.webp";
import AppleStore from "../../assets/apple-store.svg";
import Warranty from "../../assets/Warranty.avif";
import DebitCard from "../../assets/debit-card.svg";
import CreditCard from "../../assets/credit-card.svg";
import UPI from "../../assets/upi.svg";
import NetBanking from "../../assets/net-banking.svg";
import FooterLogo from "../../assets/footer-logo.svg";
import Leaf from "../../assets/leaf.webp";
import Stick from "../../assets/stick.webp";

import FooterMenu from "./FooterMenu.json";

import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialYoutube,
} from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="relative mx-4">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        <div className="col-span-full flex items-center justify-center bg-[#f7f8f9] sm:col-span-1 md:col-span-2">
          <div className="container mx-auto px-0 py-10 md:px-10 md:py-0">
            <div className="flex w-full flex-col flex-wrap items-center justify-between gap-10 md:flex-row">
              <h3 className="font-semibold uppercase text-gray-900">
                Our Promise
              </h3>
              <div>
                <StoreBenefits />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-full flex w-full flex-col items-center justify-center bg-[#f7f8f9] px-10 py-5 sm:col-auto sm:items-start">
          <h3 className="mb-5 text-sm font-semibold uppercase text-gray-900">
            Experience EverKart  App on Mobile
          </h3>
          <div className="flex flex-wrap gap-4 ">
            <img src={GoogleStore} alt="Google Pay" className="block w-32" />
            <img src={AppleStore} alt="Apple Store" className="block w-32" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        <div className="col-span-2 mt-8 flex flex-col items-center justify-center">
          <div className="container mx-auto px-10">
            <div className="flex w-full flex-wrap justify-between gap-10">
              {FooterMenu.map((item, index) => (
                <div key={index} className="flex-1">
                  <h3 className="mb-3 font-bold uppercase text-gray-900">
                    {item.name}
                  </h3>
                  <ul>
                    {item.subNames.map((subItem, subIndex) => (
                      <li key={subIndex} className="mb-1">
                        <a href={subItem.url}>{subItem.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="container mx-auto mt-6 border-b border-t px-10 py-10 md:py-4">
            <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-0">
              <div className="flex flex-wrap items-center gap-4">
                <img src={Warranty} alt="secure" />
                <div>
                  <h3 className="font-bold uppercase text-gray-900">
                    100% Secure <br /> transaction
                  </h3>
                  <span className="text-xs font-semibold text-gray-500">
                    Secure SSL encryption
                  </span>
                </div>
              </div>
              <div className="inline-flex flex-wrap items-center justify-start gap-3 xl:justify-center 2xl:flex-nowrap">
                <img src={DebitCard} alt="Debit Card" />
                <img src={CreditCard} alt="Credit Card" />
                <img src={UPI} alt="UPI" />
                <img src={NetBanking} alt="Net Banking" />
              </div>
              <div className="flex items-center justify-start xl:justify-center">
                <a
                  href="#"
                  className="border-b border-t border-gray-800 px-4 py-2 xl:border-b-0 xl:border-l xl:border-r xl:border-t-0 xl:px-5"
                >
                  Site Map
                </a>
              </div>
              <div className="flex items-center justify-start xl:justify-center">
                <p className="text-left xl:text-center">
                  <span className="mr-2">EverKart is present in</span>
                  <button className="mt-3 rounded border border-gray-700 px-4 py-2 text-xs">
                    46 Countries
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 mt-3 bg-[#f7f8f9] px-10 py-5 md:col-span-1">
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase text-gray-900">
              follow us
            </h3>
            <div className="mb-10 flex justify-between">
              <TiSocialFacebook size={34} />
              <TiSocialTwitter size={34} />
              <TiSocialInstagram size={34} />
              <TiSocialYoutube size={34} />
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase text-gray-900">
              Sport advice for you
            </h3>
            <a href="#" className="mb-8 block w-full bg-white p-3 text-center">
              blog.EverKart .in
            </a>
            <h3 className="mb-4 text-sm font-bold uppercase text-gray-900">
              Explore sports events near you
            </h3>
            <a href="#" className="block w-full bg-white p-3 text-center">
              play.EverKart .in
            </a>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="container mx-auto mt-9">
          <h3 className="mb-4 text-center font-bold uppercase text-gray-900">
            Our Purpose
          </h3>
          <p className="mb-4 text-center  text-base font-semibold text-sky-700 md:text-lg">
            <span className="text-lime-500">To Sustainably</span> make the
            Pleasure and Benefits of Sport accessible to the Many
          </p>
          <div className="relative py-10">
            <img
              src={Leaf}
              alt="leaf"
              className="absolute -top-20 right-0 w-28 object-cover sm:w-auto"
            />
            <img
              src={FooterLogo}
              alt="dekaathlon logo"
              className="mx-auto w-3/6"
            />
          </div>
          <p className="py-10 text-center text-xs">
            © 2024 Decathlon Sports India Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
      <img
        src={Stick}
        alt="stick"
        className="absolute bottom-0 w-28 object-contain sm:w-auto"
      />
    </footer>
  );
};

export default Footer;
