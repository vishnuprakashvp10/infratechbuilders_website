import React from 'react'
import Contactushero from './components/Contactus/Contactushero'
import Contactusdetails from './components/Contactus/Contactusdetails'
import WhatsAppButton from './whatsappbutton'
import { Helmet } from 'react-helmet-async'


const Contactus = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us &#124; Infratech Builders, Chennai</title>
        <meta name='description' content="Ready to transform your space in Chennai? Drop us a message, one of our team members will get in touch with you promptly." />
      </Helmet>
      <WhatsAppButton />
      <Contactushero />
      <Contactusdetails />
    </div>
  )
}

export default Contactus  