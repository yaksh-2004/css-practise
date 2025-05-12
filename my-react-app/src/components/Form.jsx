import React from "react";

const Form = () => {
  return (
    <div id="register" className="bg-white py-6  sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 mt-16 mb-8 ">
        <h2 className="mb-4 text-center text-3xl font-bold text-gray-800 md:mb-8 lg:text-4xl">
          Join the Webinar
        </h2>
      </div>
      <form className="mx-auto max-w-lg rounded-xl shadow-xl shadow-slate-300 p-6">
        <div className="flex flex-col gap-4 p-4"> 
            
            <div>
            <label htmlFor = "name" className="mb-2  text-sm sm:text-base block text-gray-700 font-medium">
                Your Name
             </label>
             <input type="text" id="name" name="name" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"required>
            
            </input>
            </div>

            <div>
            <label htmlFor = "email" className="mb-2  text-sm sm:text-base block text-gray-700 font-medium">
              Email Address
             </label>
             <input name="email" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"required>
            
            </input>
            </div>

            <div>
              <label htmlFor="how" className="block text-gray-700 font-medium">How did you find us?</label>
              <select id="how" name="how" className="mt-2 p-2 border border-gray-400 rounded w-full focus:outline-none focus:ring focus:border-blue-500" required>
                <option value="">Select an option</option>
                <option value="search_engine">Search Engine</option>
                <option value="social_media">Social Media</option>
                <option value="word_of_mouth">Word of Mouth</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="agree" name="agree" className="mr-2" />
              <label htmlFor="agree" className="text-gray-600">By clicking sign up you agree to our <a href="#" className="text-blue-500 hover:underline">Terms</a> and read our <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.</label>
            </div>
            <button type="submit" className="bg-blue-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500">Sign Up</button>
        </div>

      </form>
    </div>
  );
};

export default Form;
 