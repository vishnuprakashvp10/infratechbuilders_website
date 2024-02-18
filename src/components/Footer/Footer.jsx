import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/infratech-logobg.png";
import { IoLocation } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaLinkedin, FaMobileAlt } from "react-icons/fa";
import ThankYouPopup from "../../ThankYouPopup";
import { useForm } from "react-hook-form";
import { createContactFormFirebase } from "../../Utils/firebase";
import { FormContext } from "../../contexts/FormSubmitted.context";

const FooterLinks = [
  {
    title: "Construction",
    link: "/construction",
  },
  {
    title: "Home Interior",
    link: "/overview-home-interiors",
  },
  {
    title: "Renovation Services",
    link: "/renovation-services",
  },
  {
    title: "Painting Services",
    link: "/painting-services",
  },
  {
    title: "Multi-Turf Construction",
    link: "/multi-turf-construction",
  },
];

const Footer = () => {
  const { register, handleSubmit, reset } = useForm();
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);

  const { formContext, setFormContext } = useContext(FormContext);

  const onSubmit = async (data) => {
    createContactFormFirebase(data, "Footer").then(() => { console.log("Done submitting") }).catch((err) => console.log(err)).finally(() => {
      // Save to localStorage that the form has been submitted
      localStorage.setItem('hasFormSubmitted', JSON.stringify(true));
      setFormContext(true);
      setShowThankYouPopup(true);
    })
  };

  return (
    <div className="container bg-primary/10">
      <div className="grid grid-cols-1 md:grid-cols-4 pb-10 relative">
        <div className="py-8 px-4 text-center md:text-left">
          <Link to="/">
            <img
              src={footerLogo}
              alt=""
              className="w-[200px] mx-auto md:mx-0 lg:w-[150px] xl:w-[200px]"
            />
          </Link>
        </div>

        <div className="py-8 px-4 text-center md:text-left">
          <h1 className="sm:text-xl text-xl font-bold mb-3">Useful Links</h1>
          <ul className="flex flex-col gap-3">
            {FooterLinks.map((link) => (
              <Link to={link.link} key={link.title} className="card-link">
                <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-black-200">
                  <span>{link.title}</span>
                </li>


              </Link>
            ))}
          </ul>
        </div>

        <div className="text-center md:text-left">
          <div className="flex justify-center items-center gap-3 py-8 px-4">
            <a href="https://www.instagram.com/infratechbuilders/">
              <FaInstagram className="text-3xl" />
            </a>
            <a href="https://www.facebook.com/infratech.builders.1">
              <FaFacebook className="text-3xl" />
            </a>
            <a href="http://www.linkedin.com/in/infra-tech-builders-6897641a6">
              <FaLinkedin className="text-3xl" />
            </a>
          </div>
          <div className="px-4 hidden md:block">
            <div className="flex hover:text-primary/90 items-center gap-3">
              <IoLocation size={64} />
              <a
                href="https://www.google.com/maps/place/13%C2%B004'23.7%22N+80%C2%B011'12.0%22E/@13.0732603,80.1841011,17z/data=!3m1!4b1!4m4!3m3!8m2!3d13.0732603!4d80.186676?hl=en&entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-sm sm:text-base hover:text-primary/90 underline">
                  Door no: 74, Ettiappan street, Golden George Nagar, Nerkundram, Chennai-600107
                </p>
              </a>
            </div>
            <div className="flex items-center hover:text-primary/90 ml-1 ">
              <FaMobileAlt size={20} />
              <div className="flex items-center ml-1 mt-2 flex-col">
                <a href="tel:+917092805747" className="text-sm hover:text-primary/90 sm:text-base underline">
                  +917092805747
                </a>
                <a href="tel:+917010332274" className="text-sm hover:text-primary/90 sm:text-base underline">
                  +917010332274
                </a>{" "}
              </div>
            </div>
          </div>

          <div className="px-4 md:hidden">
            <div className="flex items-center gap-3">
              <IoLocation size={64} />
              <a
                href="https://www.google.com/maps?q=Door+no:74+Ettiappan+street+Golden+George+Nagar+Nerkundram+Chennai-600107"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-sm sm:text-base underline">
                  Door no: 74, Ettiappan street, Golden George Nagar, Nerkundram, Chennai-600107
                </p>
              </a>
            </div>
            <div className="flex items-center ml-1.5">
              <FaMobileAlt size={20} />
              <a href="tel:+91 7092805747" className="text-sm ml-3 underline">
                +91 7092805747
              </a>
              <a href="tel:+91 7010332274" className="text-sm  underline">
                +91 7010332274
              </a>
            </div>
          </div>
        </div>

        <div className="px-4 mt-4 text-center md:text-left">
          <h1 className="sm:text-xl text-xl font-bold mb-3">Enquire Now</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Name"
              required
              {...register("name")}
              className="w-full rounded-xl border border-gray-300 dark:border-gray-500 px-2 py-2 mb-4"
            />

            <input
              type="email"
              placeholder="Email"
              required
              {...register("email")}
              className="w-full rounded-xl border border-gray-300 dark:border-gray-500 px-2 py-2 mb-4"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              pattern="[0-9+()-]*"
              title="Please enter a valid phone number"
              required
              {...register("phoneNumber")}
              className="w-full rounded-xl border border-gray-300 dark:border-gray-500 px-2 py-2 mb-4"
            />

            <div className="relative mb-4">
              <select
                id="service"
                className="w-full border rounded-xl border-gray-300 dark:border-gray-500 px-2 py-2 "
                {...register("service", { required: true })}
              >
                <option value="">Select a Service</option>
                <option value="Building construction">Building construction</option>
                <option value="Interior design">Interior design</option>
                <option value="Renovation">Renovation</option>
                <option value="Painting">Painting</option>
                <option value="Multi-turf construction">Multi-turf construction</option>
              </select>
            </div>

            <textarea
              placeholder="Message"
              required
              {...register("message")}
              className="w-full rounded-xl border border-gray-300 dark:border-gray-500 px-2 py-6 mb-4"
            ></textarea>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
              >
                Submit
              </button>
            </div>
          </form>
          {showThankYouPopup && <ThankYouPopup setShowThankYouPopup={setShowThankYouPopup} />}
        </div>
      </div>
    </div>
  );
};

export default Footer;
