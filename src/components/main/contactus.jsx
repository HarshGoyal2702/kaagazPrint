// ContactForm.js

import React from "react";

function ContactForm() {
  return (
    <div className="max-w-lg mx-auto p-6">
      <nav>
        <h1 className="text-2xl font-bold mb-6  flex justify-center">Feedback</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </nav>
    </div>
  );
}

export default ContactForm;
