import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';

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
    <div className="section-modern" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-gradient">Get In Touch</h2>
          <p className="max-w-3xl mx-auto">
            </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="form-modern">
              <h3 className="text-white mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-semibold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    className="form-input"
                    placeholder="Your name"
                    onChange={handleChange}
                    id="name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    className="form-input"
                    placeholder="your.email@example.com"
                    onChange={handleChange}
                    id="email"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-semibold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    rows="6"
                    value={form.message}
                    className="form-input resize-none"
                    placeholder="Tell me about your project or just say hello!"
                    onChange={handleChange}
                    id="message"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-modern"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="card-modern">
                <h3 className="text-white mb-6">Let's connect</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="glass p-3 rounded-full">
                      <AiOutlineMail size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300">Email</p>
                      <a 
                        href="mailto:akshay.mistry@gmail.com" 
                        className="text-white hover:text-gradient transition-colors duration-300"
                      >
                        akshay.mistry@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="glass p-3 rounded-full">
                      <AiOutlineLinkedin size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300">LinkedIn</p>
                      <a 
                        href="https://linkedin.com/in/akshaymistry-" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-gradient transition-colors duration-300"
                      >
                        linkedin.com/in/akshaymistry-
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="glass p-3 rounded-full">
                      <AiOutlineGithub size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300">GitHub</p>
                      <a 
                        href="https://github.com/akshay-mistry" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-gradient transition-colors duration-300"
                      >
                        github.com/akshay-mistry
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-modern">
                <h3 className="text-white mb-4">Quick facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Location:</span>
                    <span className="text-white">Atlanta, GA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">University:</span>
                    <span className="text-white">Georgia Tech</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Major:</span>
                    <span className="text-white">Computer Science</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Minor:</span>
                    <span className="text-white">Mathematics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
