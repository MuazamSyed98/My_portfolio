import React from "react";

function Success() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold text-green-400">Thank You!</h1>
      <p className="mt-4 text-lg text-center">
        Your message has been successfully sent. I’ll get back to you soon!
      </p>
    </div>
  );
}

export default Success;
