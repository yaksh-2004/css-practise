import React from "react";

const HostDetail = () => {
  return (
 <div id="host" className="bg-white py-6 sm:py-8 lg:py-12 ">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8 mt-10">
  
          <div className="mb-8 md:mb-10">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-800 md:mb-6 lg:text-3xl">About The Host</h2>
            <p className="mx-auto max-w-screen-md text-center font-semibold text-gray-600 md:text-lg">Expert who will be conducting this webinar</p>
          </div>
    
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 p-8">

            <div className="justify-center rounded-lg p-4 lg:p-8">
              <img src="https://i.ibb.co/GCyYvKt/host-2x.jpg" alt="Host Avatar" className="h-56 w-56 sm:h-auto sm:w-auto mb-2 rounded-md" />
            </div>

      
   
            <div className="flex flex-col rounded-lg sm:p-8 p-4">
              <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">John Doe</div>
              <div className="text-sm font-semibold sm:text-base mb-6 mt-2">CEO, Evento</div>
      
              <p className="text-base font-serif text-gray-500 text-justify sm:leading-relaxed sm:mr-8 mb-8 mt-8">
                Meet John Doe, an experienced web developer and tech enthusiast who is passionate about sharing his knowledge with aspiring developers. As the host of our upcoming webinar on Web Development, John will take you on an exciting journey into the world of web development.
              </p>
              <p className="hidden md:text-justify md:block text-base font-serif text-gray-500 leading-relaxed sm:mr-8 mb-12">
                During the webinar, John will cover various topics, including front-end and back-end development, popular programming languages, essential tools and frameworks, best practices, and tips for building responsive and user-friendly websites. 
              </p>
                  </div>
                  
                </div>
              </div>
            </div>
  );
};

export default HostDetail;
