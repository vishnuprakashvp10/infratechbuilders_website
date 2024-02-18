import React from 'react';
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import bgImg from "../../assets/Hero/contacusside.jpg";
import { useForm } from 'react-hook-form';
import { createContactFormFirebase } from '../../Utils/firebase';

export default function Contactusdetails() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmissionSuccess, setSubmissionSuccess] = React.useState(false);

  const onSubmitForm = async (data) => {
console.log(data)
    createContactFormFirebase(data, "Contact Us Page").then(() => { console.log("Done submitting") }).catch((err) => console.log(err)).finally(() => {
      setSubmissionSuccess(true);
    })
  };

  const contact_info = [
    {
      icon: <IoMdMail />,
      text: "enquiries@infratechbuilders.in",
      href: "mailto:enquiries@infratechbuilders.in",
    },
    {
      icon: <FaPhoneVolume />,
      text: "+91 7092805747",
      href: "tel:+917092805747",
    },
    {
      icon: <FaMapMarkerAlt />,
      text: (
        <>
          Door no: 74, Ettiappan street, <br />
          Golden George Nagar, <br />
          Nerkundram, Chennai-600107
        </>
      ),
      href: "https://www.google.com/maps?q=13.073260307312012,80.18667602539062&z=17&hl=en",
    },
  ];

  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-row items-center text-center">
        {!isSubmissionSuccess && (
          <div className="space-y-4 xl:flex xl:items-center xl:space-x-2 xl:flex-row xl:flex-wrap">
            {contact_info.map((info, index) => (
              <div key={index} className={`flex items-center space-x-2 xl:space-x-4 xl:flex-row md:flex-col sm:flex-col flex-col ${index === 0 ? 'xl:mt-3' : ''}`}>
                <div className="ml-5 min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-orange-400 rounded-full cursor-pointer xl:mt-2" onClick={() => window.open(info.href)}>
                  {info.icon}
                </div>
                <a className={`text-black text-left ${index === 0 ? 'xl:mt-3' : ''}`} href={info.href} target='_blank' rel="noopener noreferrer">{info.text}</a>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="register py-8 mt-10">
        {isSubmissionSuccess ? (
          <div className="col-1">
            <h2 className="text-center">THANK YOU</h2>
            <p className='ml-4 md:ml-0'>Thank you for getting in touch. We will be in contact with you at our earliest convenience.</p>
          </div>
        ) : (
          <div className="col-1">
            <h2 className='text-center'>CONTACT US</h2>
            <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmitForm)} >
              <input type="text" {...register("name", { required: true })} placeholder='Full Name' />
              <input type="email" {...register("email", { required: true })} placeholder='Email Address' />
              <input type="tel" {...register("phoneNumber", { required: true, pattern: /^[0-9]*$/ })} placeholder='Phone Number' /> {/* Change input type to "tel" */}
              <div className="relative mb-4">
                <select
                  id="service"
                  className="w-full border rounded-xl border-gray-300  dark:border-gray-500 px-2 py-2 "
                  {...register("service", { required: true })}
                >
                  <option value="" disabled selected>
                    Select a Service
                  </option>
                  <option value="Building construction">Building construction</option>
                  <option value="Interior design">Interior design</option>
                  <option value="Renovation">Renovation</option>
                  <option value="Painting">Painting</option>
                  <option value="Multi-turf construction">Multi-turf construction</option>
                </select>
              </div>
              <textarea
                type="text"
                {...register("message", { required: true, maxLength: 300 })}
                placeholder='Message'
                style={{ width: "100%", border: "1px solid #ccc", padding: "10px", boxSizing: "border-box" }}  // Adjust padding and border as needed
              />
              <button
                type="submit"
                className="bg-gradient-to-r mt-6 from-primary to-secondary hover:scale-105 duration-200 text-white py-3 px-4"
              >
                Send Message
              </button>
            </form>

          </div>
        )}
        {!isSubmissionSuccess && (
          <div className="col-2">
            <img src={bgImg} alt="" />
          </div>
        )}
      </div>
    </section>
  );
}
