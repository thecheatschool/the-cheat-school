import React from 'react';
import { Mail,Phone } from 'lucide-react';
const ContactUsPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-5 grid grid-cols-1 md:grid-cols-2 gap-[90px]">

  {/* LEFT – FORM */}
  <form className="bg-white/30 backdrop-blur-lg p-6 shadow-md rounded-sm border border-black">
  <h1 className='text-center text-primary text-4xl font-primary'>CONTACT US</h1>
    <input
      type="text"
      placeholder="Full Name"
      className="w-full mt-[30px] mb-[30px] px-4 py-2 border border-gray-300 rounded-lg"
    />

    <input
      type="email"
      placeholder="Email"
      className="w-full mb-[30px] px-4 py-2 border border-gray-300 rounded-lg"
    />

    <textarea
      rows="5"
      placeholder="Message"
      className="w-full mb-4 h-[100px] px-4 py-2 border border-gray-300 rounded-lg"
    ></textarea>

    <button className="bg-primary text-white border font-primary border-black px-5 py-2 rounded-xl hover:-translate-y-1 transition duration-300">
      Submit
    </button>
  </form>

  {/* RIGHT – MAP + CONTACT INFO */}
  <div className="flex flex-col gap-6">

    {/* PHONE */}
     <div className="">
      <h3 className="font-primary text-primary text-2xl flex items-center gap-2">Phone <Phone/></h3>
      <p className="text-lg font-teritiary">+91 99895 20942</p>
      <br></br>
      <h3 className="font-primary text-primary text-2xl flex items-center gap-2">Email <Mail/></h3>
      <p className="text-lg font-teritiary">team@thecheatschool.com</p>
    </div>

    {/* MAP */}
   <div className="w-full rounded-sm overflow-hidden mb-8 border  border-black shadow-sm">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6459481240995!2d78.43980667462785!3d17.428770701612788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97113de30677%3A0x3c947d8d02f0cad2!2sEmiratiyo%20Investments%20I%20Dubai%20property%20investments%20I%20Property%20asset%20management%20Dubai%20I%20Luxury%20property%20investment%20Dubai!5e0!3m2!1sen!2sin!4v1763150303208!5m2!1sen!2sin"
        width="100%"
        height="220"
        loading="lazy"
        className="block"
      ></iframe>
    </div>

  </div>
</div>

  );
};

export default ContactUsPage;