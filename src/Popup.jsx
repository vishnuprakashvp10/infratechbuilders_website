import React, { useState, useEffect, useContext, useRef } from "react";
import { IoCloseOutline, IoMailOutline, IoCallOutline } from "react-icons/io5";

import ThankYouPopup from './ThankYouPopup';
import Select from "react-select";
import { createContactFormFirebase } from "./Utils/firebase";
import { FormContext } from "./contexts/FormSubmitted.context";
import { useLocation } from "react-router-dom";

const OrderPopup = ({ orderPopup, setOrderPopup, timeoutReq, type }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    service: null,
    message: ""
  });

  const handlePhoneInput = (event) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
  };


  const [showThankYouPopup, setShowThankYouPopup] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { formContext, setFormContext } = useContext(FormContext);

  const location = useLocation();

  const [initialCall, setInitialCall] = useState(false);

  useEffect(() => {
    if (!timeoutReq) return;
    if (location.pathname === "/contact-us") return;

    const popupFunction = () => {
      if (document.getElementById("contact-form")) return;
      if (!formSubmitted) {
        setOrderPopup(true);
      }
      setInitialCall(true);
    }

    let timeoutId;

    if (initialCall) {
      timeoutId = setInterval(popupFunction, 20000)
    } else {
      timeoutId = setInterval(popupFunction, 6000);
    }

    return () => {
      clearInterval(timeoutId);
    };
  }, [timeoutReq, formSubmitted, setOrderPopup, initialCall, setInitialCall, location]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createContactFormFirebase(formData, type).then(() => { }).catch((err) => console.log(err)).finally(() => {
      setShowThankYouPopup(true);
      setOrderPopup(false);
      setFormSubmitted(true);
      setFormContext(true);
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        service: null,
        message: ""
      })
    })
  };

  const options = [
    { value: "option1", label: "Building construction" },
    { value: "option2", label: "Interior design" },
    { value: "option3", label: "Renovation" },
    { value: "option4", label: "Painting" },
    { value: "option5", label: "Multi-turf construction" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: '1px solid grey',
      borderRadius: '0.7rem',
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '0.5rem 1rem',
      paddingLeft: '0.5rem'
    }),
    input: (provided) => ({
      ...provided,
      margin: '0',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
  };

  if (showThankYouPopup) {
    return <ThankYouPopup setShowThankYouPopup={setShowThankYouPopup} />
  }

  if (!orderPopup && !showThankYouPopup) {
    return null;
  }

  // if (formContext && type == "Popup") return null;

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex justify-center items-center" id="contact-form">

          <div className="absolute p-4 sm:p-7 shadow-md bg-white duration-200 md:w-[400px] xl:w-[390px] mx-[10px] md:mx-[200px] xl:mx-[760px]">
            <div className="flex items-center justify-center relative">
              <h1 className="text-xl text-center font-semibold text-black/70">
                ENQUIRE NOW
              </h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer absolute right-0 top-0"
                onClick={() => setOrderPopup(false)}
              />
            </div>
            <div className="mt-2">
              <div className="flex items-center justify-center mb-2">
                <IoMailOutline className="text-xl" />
                <a className="text-gray-600 underline" href="mailto:enquiries@infratechbuilders.in" target="_blank" rel="noopener noreferrer">enquiries@infratechbuilders.in</a>
              </div>
              <div className="flex items-center justify-center mb-2">
                <IoCallOutline className="text-xl" />
                <a className="text-gray-600 underline" href="tel:+917092805747" target="_blank" rel="noopener noreferrer">+91 7092805747</a>
                <a className="text-gray-600 underline" href="tel:+917010332274" target="_blank" rel="noopener noreferrer">+91 7010332274</a>
              </div>
              <form onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-gray-300 dark:border-gray-500  px-2 py-2 mb-4"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-gray-300 dark:border-gray-500  px-2 py-2 mb-4"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  pattern="[0-9]*"
                  required
                  onInput={handlePhoneInput}
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="w-full rounded-xl border border-gray-300 dark:border-gray-500  px-2 py-2 mb-4"
                />
                <div className="mb-4">
                  <Select
                    options={options}
                    value={options.find(option => option.value === formData.service)}
                    onChange={(selectedOption) => setFormData({ ...formData, service: selectedOption.label })}
                    placeholder="Select a service" // Set the placeholder to "Select a service"
                    styles={{
                      ...customStyles,
                      option: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isFocused ? 'orange' : 'white',
                        color: state.isFocused ? 'white' : 'black',
                      }),
                    }}
                  />
                </div>
                <textarea
                  type="text"
                  placeholder="Message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-gray-300 dark:border-gray-500  px-2 py-6 mb-4"
                />
                <div className="flex justify-center">
                  <button
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* {showThankYouPopup && <ThankYouPopup setShowThankYouPopup={setShowThankYouPopup} />} */}
    </>
  );
};

export default OrderPopup;
