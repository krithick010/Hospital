// src/components/Video.jsx
import React from "react";
import hospitalVideo from "C:/Users/krith/OneDrive/Desktop/hospital/src/Hh.mp4"; 
import image from 'C:/Users/krith/OneDrive/Desktop/hospital/src/nurse.png';
import mother from 'C:/Users/krith/OneDrive/Desktop/hospital/src/c.png';

import kanyawest from 'C:/Users/krith/OneDrive/Desktop/hospital/src/kanyawest.jpeg';
import gate from 'C:/Users/krith/OneDrive/Desktop/hospital/src/gate.jpeg';
import bomb from 'C:/Users/krith/OneDrive/Desktop/hospital/src/bomb.jpeg';
import sonu from 'C:/Users/krith/OneDrive/Desktop/hospital/src/sonu.avif';
const Video = () => {
  return (
    <div>
    <section className="relative w-full h-[70vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={hospitalVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Transforming your care</h1>
        <p className="mt-4 text-lg md:text-2xl">Wayne's Clinic is the "place" no matter what it is, we got you don't worry</p>
        <button className="mt-6 px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg">
          Get Started
        </button>
      </div>
    </section>
    <div className="container mx-auto px-8 py-16">
    {/* Search Bar */}
    <div className="flex justify-center mb-12">
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          placeholder="Search our services..."
          className="w-full p-4 pr-24 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="absolute inset-y-0 right-0 flex items-center px-4 bg-blue-500 text-white rounded-r-lg border-l border-gray-300 hover:bg-blue-600"
        >
          Search
        </button>
      </div>
    </div>

    
    <div className="flex flex-col md:flex-row items-center mb-12">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src={image}
          alt="Descriptive Alt Text"
          className="rounded-lg shadow-lg w-full h-auto max-w-xl max-h-96"
        />
      </div>

      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-4xl font-bold mb-4">Your Path to Healing: Precision from the Start</h2>
        <p className="text-xl text-gray-700 leading-relaxed">
          The key to effective treatment is a precise diagnosis. Our specialists are committed to tackling the most complex medical issues. Recognized by the Ministry of Health, our hospital has earned the most No. 1 rankings nationwide. Explore our top-rated specialties.
        </p>
      </div>
    </div>

  
    <div className="flex flex-col md:flex-row-reverse items-center mb-12">

      <div className="md:w-1/2 mb-8 md:mb-0 md:ml-12"> 
        <img
          src={mother}
          alt="Descriptive Alt Text"
          className="rounded-lg shadow-lg w-full h-auto max-w-xl max-h-96"
        />
      </div>

      
      <div className="md:w-1/2 md:pr-8">
        <h2 className="text-4xl font-bold mb-4">Our Commitment to You: Comprehensive Care</h2>
        <p className="text-xl text-gray-700 leading-relaxed">
          At Wayne's Clinic, we offer a wide range of healthcare services to meet all your medical needs. Our team of experts is here to provide you with the highest quality care, from routine checkups to complex procedures.
        </p>
      </div>
    </div>


    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-6">Our Locations</h2>
      <p className="text-lg text-gray-700 mb-6">
        We are proud to serve patients across multiple locations. Find a clinic near you and experience our exceptional care.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      
      <img
        src={kanyawest}
        alt="City 1"
        className="rounded-lg shadow-lg w-64 h-64 object-cover"
      />
      <img
        src={bomb}
        alt="City 2"
        className="rounded-lg shadow-lg w-64 h-64 object-cover"
      />
      <img
        src={gate}
        alt="City 3"
        className="rounded-lg shadow-lg w-64 h-64 object-cover"
      />
      <img
        src={sonu}
        alt="City 4"
        className="rounded-lg shadow-lg w-64 h-64 object-cover"
      />
      </div>
    </div>

    <footer className="bg-gray-800 text-white py-12 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p className="text-lg mb-2">Phone: (123) 456-7890</p>
          <p className="text-lg mb-2">Email: info@waynesclinic.com</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Socials</h3>
          <div className="flex flex-col space-y-2">
            <a href="https://facebook.com" className="text-gray-300 hover:text-white">Facebook</a>
            <a href="https://www.linkedin.com/in/krithick-bala-b76801290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-gray-300 hover:text-white">Linkedin</a>
            <a href="https://www.instagram.com/__daraneesh___?igsh=MWZ0dzZiZGUyZG41Zg==" className="text-gray-300 hover:text-white">Instagram</a>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-400">© 2024 Wayne's Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
  </div>
  );
};

export default Video;