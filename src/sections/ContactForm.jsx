
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone && formData.phone.length < 10) {
      setStatus("❌ Please enter a valid phone number.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      // Admin Email
      await emailjs.send(
        "service_pfg3e7h",
        "template_ll26q8t",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          time: new Date().toLocaleString(),
          title: "Website Inquiry",
        },
        "ka7Y-kgsxoRKfzqDl"
      );

      // Customer Auto Reply Email
      await emailjs.send(
        "service_pfg3e7h",
        "template_gkfg7qm",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        },
        "ka7Y-kgsxoRKfzqDl"
      );

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setStatus("✅ Message Sent Successfully!");

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0F2942]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Contact Us
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/10 text-white border border-white/10 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/10 text-white border border-white/10 outline-none"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/10 text-white border border-white/10 outline-none"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/10 text-white border border-white/10 outline-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-[#00B4D8] text-[#0F2942] font-bold hover:opacity-90 transition-all disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <div className="text-center text-white text-sm mt-4">
              {status}
            </div>
          )}
        </form>

        {/* Success Popup */}
        {success && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-3xl p-8 max-w-md mx-4 text-center shadow-2xl">
              <div className="text-6xl mb-4">✅</div>

              <h3 className="text-2xl font-bold text-[#0F2942] mb-3">
                Inquiry Submitted
              </h3>

              <p className="text-gray-600 mb-3">
                Thank you for contacting HIKOM International.
              </p>

              <p className="text-gray-500 text-sm">
                Our engineering team will contact you shortly.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
