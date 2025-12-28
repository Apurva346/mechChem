import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Side: Contact Info */}
        <div>
          <h1 className="text-4xl font-black text-gray-900 uppercase">Contact <span className="text-red-700">Us</span></h1>
          <p className="mt-4 text-gray-600 italic">Get in touch with our experts for custom industrial solutions.</p>
          
          <div className="mt-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-100 text-red-700 flex items-center justify-center rounded-full font-bold">P</div>
              <div><p className="text-sm text-gray-500 uppercase font-bold">Call Us</p><p className="font-medium">+91-9825009216</p></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 text-gray-700 flex items-center justify-center rounded-full font-bold">E</div>
              <div><p className="text-sm text-gray-500 uppercase font-bold">Email</p><p className="font-medium">inquiry@mechchemindia.com</p></div>
            </div>
          </div>
        </div>

        {/* Right Side: Simple Inquiry Form */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded focus:ring-2 focus:ring-red-700 outline-none" />
            <input type="email" placeholder="Email Address" className="w-full p-3 border rounded focus:ring-2 focus:ring-red-700 outline-none" />
            <textarea placeholder="Your Requirement" rows="4" className="w-full p-3 border rounded focus:ring-2 focus:ring-red-700 outline-none"></textarea>
            <button className="w-full bg-red-700 text-white font-bold py-3 rounded hover:bg-gray-800 transition">SEND INQUIRY</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;