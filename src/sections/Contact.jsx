import React, { useState } from "react";
import { Button } from "../components";
import { Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/xjkbdoav", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setStatus("Failed to send the message. Please try again.");
    }
  };

  return (
    <section class="max-w-[1140px] w-full mx-auto p-4 md:p-8">
      <h1 class="font-code font-semibold mb-8 text-2xl md:text-3xl leading-tight">
        CONTACT ME
      </h1>

      <form
        className="flex flex-col font-montserrat md:flex-row gap-6"
        onSubmit={handleSubmit}
      >
        <div className="flex-1 flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#213a57]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#213a57]"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#213a57]"
            required
          />
        </div>

        <div className="flex-1 flex flex-col space-y-4">
          <textarea
            rows="6"
            name="message"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#213a57]"
            required
          />

          <Button label={"Send"} Icon={Send} type="submit" />

          {status && <p>{status}</p>}
        </div>
      </form>
    </section>
  );
};

export default Contact;
