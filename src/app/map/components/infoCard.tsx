import React, { useState } from "react";
import Image from "next/image";

const InfoCard = () => {
  const [activeSection, setActiveSection] = useState("#about");

  const handleButtonClick = (section: React.SetStateAction<string>) => {
    setActiveSection(section);
  };

  return (
    <div className="max-w-sm w-96 mx-auto bg-white rounded-lg shadow-lg overflow-hidden relative">
      <div
        className="relative h-40 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')",
        }}
      ></div>

      <div className="text-center mt-16">
        <h1 className="text-lg font-semibold">William Rocheald</h1>
        <h2 className="text-sm text-gray-600">UI Developer</h2>
      </div>
      <div className="p-6">
        {activeSection === "#about" && (
          <div className="card-section is-active">
            <h3 className="text-sm font-semibold">ABOUT</h3>
            <p className="text-gray-600 text-sm mt-2">
              Whatever tattooed stumptown art party sriracha gentrify hashtag
              intelligentsia readymade schlitz brooklyn disrupt.
            </p>
          </div>
        )}
        {activeSection === "#experience" && (
          <div className="card-section is-active">
            <h3 className="text-sm font-semibold">WORK EXPERIENCE</h3>
            <ul className="text-gray-600 text-sm mt-2">
              <li>2014 - Front-end Developer at JotForm</li>
              <li>2016 - UI Developer at GitHub</li>
              <li>2018 - Illustrator at Google</li>
              <li>2020 - Full-Stack Developer at CodePen</li>
            </ul>
          </div>
        )}
        {activeSection === "#contact" && (
          <div className="card-section is-active">
            <h3 className="text-sm font-semibold">CONTACT</h3>
            <p className="text-gray-600 text-sm mt-2">Algonquin Rd, Three Oaks Vintage, MI, 49128</p>
            <p className="text-gray-600 text-sm">(269) 756-9809</p>
            <p className="text-gray-600 text-sm">william@rocheald.com</p>
          </div>
        )}
      </div>
      <div className="flex border-t card-buttons">
        <button
          className={`flex-1 py-2 text-sm font-medium ${activeSection === "#about" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-600"}`}
          onClick={() => handleButtonClick("#about")}
          data-section="#about"
        >
          ABOUT
        </button>
        <button
          className={`flex-1 py-2 text-sm font-medium ${activeSection === "#experience" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-600"}`}
          onClick={() => handleButtonClick("#experience")}
          data-section="#experience"
        >
          EXPERIENCE
        </button>
        <button
          className={`flex-1 py-2 text-sm font-medium ${activeSection === "#contact" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-600"}`}
          onClick={() => handleButtonClick("#contact")}
          data-section="#contact"
        >
          CONTACT
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
