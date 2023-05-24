import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prevData) => ({
        ...prevData,
        [e.target.id] : e.target.value
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_yige6ap',
        'template_rm6mw9s',
        {
          from_name: form.name,
          to_name: "Akshay Mistry",
          from_email: form.email,
          to_email: "akshay.mistry@gmail.com",
          message: form.message,
        },
        'XEe9yCMDPksvH4jkg'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for reaching out! I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          

          alert("Please try again.");
        }
      );
  };

  return (
    <div className="section px-4 md:px-0" id="contact">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-500 mb-6 text-lg text-center lg:w-3/4">
          Fill out the form below to connect with me, and I will get back to you as soon as possible!
        </p>
      </div>

      <div>
        <form className="tile shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              value={form.name}
              className="bg-gray-200 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              placeholder="Name"
              onChange={handleChange}
              id="name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              value={form.email}
              className="bg-gray-200 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              placeholder="Email"
              onChange={handleChange}
              id="email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              rows="4"
              value={form.message}
              className="bg-gray-200 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              placeholder="Message"
              onChange={handleChange}
              id="message"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="btn3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
