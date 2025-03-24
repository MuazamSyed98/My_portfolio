import React from "react";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-gray-200 p-8">
      <h1 className="text-3xl font-bold text-red-500 mb-6">Contact Me</h1>
      <p className="mb-8 max-w-md text-center">
        This Page is under-development, come back later to send a message
      </p>
      
      <form
  name="contact"
  method="POST"
  data-netlify="true"
  action="/success" 
  className="w-full max-w-lg bg-gray-900 p-8 rounded-lg shadow-lg space-y-6"
>
  {/* Hidden input for Netlify to recognize the form */}
  <input type="hidden" name="form-name" value="contact" />

  <div>
    <label className="block text-sm font-semibold mb-2">Name</label>
    <input
      type="text"
      name="name"
      placeholder="Your name"
      required
      className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-red-500"
    />
  </div>

  <div>
    <label className="block text-sm font-semibold mb-2">Email</label>
    <input
      type="email"
      name="email"
      placeholder="you@example.com"
      required
      className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-red-500"
    />
  </div>

  <div>
    <label className="block text-sm font-semibold mb-2">Message</label>
    <textarea
      name="message"
      rows="5"
      placeholder="Type your message here..."
      required
      className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-red-500"
    ></textarea>
  </div>

  <button
    type="submit"
    className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded font-semibold transition duration-200"
  >
    Send Message
  </button>
</form>

    </div>
  );
}

export default Contact;
