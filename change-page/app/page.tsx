"use client";
import Image from 'next/image'; 
import React, { useState } from "react";

export default function Page() {
  const [step, setStep] = useState(1);
  const [confirmation, setConfirmation] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    phoneNumber: "",
    occupation: "",
    address: "",
    state: "",
    start: "",
    end: "",
    payPeriod: "",
    payMethod: "",
    collectBy: "",
    securityDeposit: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleSave = () => {
    setConfirmation(true);
  };

  const handleSaves = () => {
  
    setConfirmation(false);
    //  window.location.reload();
     console.log(formData);
  };

  return (
    <div className="bg-white h-screen w-full flex items-center justify-center font-roboto">
      <div className="flex w-full h-full">
        <div className="w-1/2 h-full relative">
          <Image
            src="/lefts.jpg"
            alt="welcome"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between items-center p-4">
  <div></div>
  <h1 className="text-white text-4xl font-bold">We will find your dream home</h1>
  <div>
    <div className="flex justify-between space-x-2 mr-64">
      <Image src="/phone.svg" alt="Phone" width={30} height={30} className="filter invert"/>
      <p className="text-white text-xl">0677927107</p>
      <Image src="/email.svg" alt="Email" width={30} height={30} className="filter invert"/>
      <p className="text-white text-xl">ethansawe99@gmail.com</p>
      
    </div>
  </div>
</div>
     
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center px-20">
          <div>
            <h1 className="text-black text-center mb-10">Welcome! Please provide your details</h1>
            
          </div>

          {step === 1 && (
            <>
              <div className="flex justify-between mt-2">
                <div className="mt-2">
                  <label className="text-black">First name </label><br/>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="border-2 rounded-lg p-2 w-64 text-black"
                    placeholder="First Name"
                  />
                </div>
                <div className="mt-2">
                  <label className="text-black">Second name </label><br/>
                  <input
                    type="text"
                    name="secondName"
                    value={formData.secondName}
                    onChange={handleInputChange}
                    className="border-2 rounded-lg p-2 w-64 text-black"
                    placeholder="Second Name"
                  />
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <div className="mt-2">
                  <label className="text-black">Phone Number </label><br/>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="border-2 rounded-lg p-2 text-black w-64"
                    placeholder="Phone number"
                  />
                </div>
                <div className="mt-2">
                  <label className="text-black">Occupation </label><br/>
                  <input
                    type="text"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleInputChange}
                    className="border-2 rounded-lg p-2 text-black w-64"
                    placeholder="Occupation"
                  />
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <div className="mt-2">
                  <label className="text-black">Street Address </label><br/>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="border-2 rounded-lg p-2 text-black w-64"
                    placeholder="Street Address"
                  />
                </div>
                <div className="mt-2">
                  <label className="text-black">State </label><br/>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="border-2 rounded-lg p-2 text-black w-64"
                    placeholder="State"
                  />
                </div>
              </div>

              <div className="flex justify-center items-center">
                <button
                  className="bg-black text-white mt-4 rounded-lg w-32 h-10"
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="flex justify-between mt-2">
                <div className="mt-2">
                  <label className="text-black">Start Date Agreement </label><br/>
                  <input
                    type="text"
                    name="start"
                    value={formData.start}
                    onChange={handleInputChange}
                    className="border-2 rounded-lg p-2 text-black w-64"
                    placeholder="Start Date Agreement"
                  />
                </div>
                <div className="mt-2">
                  <label className="text-black">End Date Agreement </label><br/>
                  <input
                    type="text"
                    name="end"
                    value={formData.end}
                    onChange={handleInputChange}
                    className="border-2 rounded-lg p-2 text-black w-64"
                    placeholder="End Date Agreement"
                  />
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <div className="mt-2">
                  <label className="text-black">Pay period </label><br/>
                  <input
                    type="text"
                    name="payPeriod"
                    value={formData.payPeriod}
                    onChange={handleInputChange}
                    className="border-2 rounded-lg p-2 text-black w-64"
                    placeholder="Pay period"
                  />
                </div>
                <div className="mt-2">
                  <label className="text-black">Pay method </label><br/>
                  <input
                    type="text"
                    name="payMethod"
                    value={formData.payMethod}
                    onChange={handleInputChange}
                    className="border-2 rounded-lg p-2 text-black w-64"
                    placeholder="Pay method"
                  />
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <div className="mt-2">
                  <label className="text-black">Collected by </label><br/>
                  <input
                    type="text"
                    name="collectBy"
                    value={formData.collectBy}
                    onChange={handleInputChange}
                    className="border-2 rounded-lg p-2 text-black w-64"
                    placeholder="Collected by"
                  />
                </div>
                <div className="mt-2">
                  <label className="text-black">Security deposit</label><br/>
                  <input
                    type="text"
                    name="securityDeposit"
                    value={formData.securityDeposit}
                    onChange={handleInputChange}
                    className="border-2 rounded-lg p-2 text-black w-64"
                    placeholder="Security deposit"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button
                  className="bg-black text-white mt-4 rounded-lg w-32 h-10"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      {confirmation && (
        <div className="fixed top-0 left-0 w-full h-full flex bg-black bg-opacity-30 items-center justify-center z-10 text-black">
          <div className="p-4 w-84 h-61 rounded-xl shadow-2xl bg-white">
            <h2 className="text-xl font-bold mb-2 text-base-neutral-focus text-center">
              Would you like to save?
            </h2>
            <p className="mb-4">
              Kindly confirm if you wish to save the modifications you've made. 
            </p>
            <div className="flex justify-center">
              <button
                className="bg-orange-400 w-96 h-12 rounded-lg text-white"
                onClick={handleSaves}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
