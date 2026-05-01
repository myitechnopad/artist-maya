

// // // import React, { useState } from "react";
// // // import Contact from "./Contact";

// // // const Navbar: React.FC = () => {
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const [isContactOpen, setIsContactOpen] = useState(false);

// // //   const menuItems = [
// // //     { label: "About", href: "#about" },
// // //     { label: "Theatre", href: "#theatre" },
// // //     { label: "Film & TV", href: "#film-tv" },
// // //     { label: "Film Production", href: "#film-production" },
// // //     { label: "Art Works", href: "#artworks" },
// // //     { label: "Gallery", href: "#gallery" },
// // //   ];

// // //   const handleClick = () => {
// // //     setIsOpen(false);
// // //   };

// // //   const handleContactClick = () => {
// // //     setIsOpen(false);
// // //     setIsContactOpen(true);
// // //   };

// // //   return (
// // //     <>
// // //       <nav className="fixed left-0 top-0 z-50 w-full bg-white shadow-sm">
// // //         <div className="mx-auto max-w-7xl px-6">
// // //           {/* Desktop Navbar */}
// // //           <ul className="hidden items-center justify-center space-x-10 py-4 font-medium text-black md:flex">
// // //             {menuItems.map((item) => (
// // //               <li key={item.href}>
// // //                 <a href={item.href} className="hover:text-gray-600">
// // //                   {item.label}
// // //                 </a>
// // //               </li>
// // //             ))}

// // //             <li>
// // //               <button
// // //                 onClick={handleContactClick}
// // //                 className="rounded-full bg-black px-6 py-2 text-white transition hover:bg-gray-800"
// // //               >
// // //                 Contact
// // //               </button>
// // //             </li>
// // //           </ul>

// // //           {/* Mobile Navbar */}
// // //           <div className="flex items-center justify-between py-4 md:hidden">
// // //             <a href="#home" className="text-lg font-bold text-black">
// // //               Maya Sharma
// // //             </a>

// // //             <button
// // //               onClick={() => setIsOpen(!isOpen)}
// // //               className="rounded-md bg-black px-3 py-2 text-xl leading-none text-white"
// // //             >
// // //               {isOpen ? "×" : "☰"}
// // //             </button>
// // //           </div>

// // //           {/* Mobile Dropdown */}
// // //           {isOpen && (
// // //             <div className="md:hidden">
// // //               <div className="space-y-2 border-t border-gray-200 bg-white py-4">
// // //                 {menuItems.map((item) => (
// // //                   <a
// // //                     key={item.href}
// // //                     href={item.href}
// // //                     onClick={handleClick}
// // //                     className="block rounded-lg px-4 py-3 font-medium text-black hover:bg-gray-100"
// // //                   >
// // //                     {item.label}
// // //                   </a>
// // //                 ))}

// // //                 <button
// // //                   onClick={handleContactClick}
// // //                   className="block w-full rounded-full bg-black px-4 py-3 text-center font-medium text-white hover:bg-gray-800"
// // //                 >
// // //                   Contact
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </nav>

// // //       <Contact
// // //         isOpen={isContactOpen}
// // //         onClose={() => setIsContactOpen(false)}
// // //       />
// // //     </>
// // //   );
// // // };

// // // export default Navbar;


// // import React, { useState } from "react";
// // import Contact from "./Contact";
// // import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

// // const Navbar: React.FC = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [isContactOpen, setIsContactOpen] = useState(false);

// //   const menuItems = [
// //     { label: "About", href: "#about" },
// //     { label: "Theatre", href: "#theatre" },
// //     { label: "Film & TV", href: "#film-tv" },
// //     { label: "Film Production", href: "#film-production" },
// //     { label: "Art Works", href: "#artworks" },
// //     { label: "Gallery", href: "#gallery" },
// //   ];

// //   const handleClick = () => setIsOpen(false);

// //   const handleContactClick = () => {
// //     setIsOpen(false);
// //     setIsContactOpen(true);
// //   };

// //   return (
// //     <>
// //       <nav className="fixed left-0 top-0 z-50 w-full bg-white shadow-sm">
// //         {/* Desktop Social Icons - screen ke ekdam right */}
// //         <div className="absolute right-10 top-1/2 hidden -translate-y-1/2 items-center space-x-5 md:flex">
// //           <a
// //             href="https://www.instagram.com/its_mayasharma?igsh=cmVsY210MTBjeGho&utm_source=qr"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="text-xl transition hover:text-pink-500"
// //           >
// //             <FaInstagram />
// //           </a>

// //           <a
// //             href="https://www.facebook.com/share/1AxqyP4Jz8/?mibextid=wwXIfr"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="text-xl transition hover:text-blue-600"
// //           >
// //             <FaFacebookF />
// //           </a>

// //           <a
// //             href="https://x.com/artist_maya?s=21&t=J4KOhVKVACtbhyY8h_9CQg"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="text-xl transition hover:text-black"
// //           >
// //             <FaXTwitter />
// //           </a>
// //         </div>

// //         <div className="mx-auto max-w-7xl px-6">
// //           {/* Desktop Navbar */}
// //           <div className="hidden items-center justify-center py-4 font-medium text-black md:flex">
// //             {menuItems.map((item) => (
// //               <a
// //                 key={item.href}
// //                 href={item.href}
// //                 className="mx-4 hover:text-gray-600"
// //               >
// //                 {item.label}
// //               </a>
// //             ))}

// //             <button
// //               onClick={handleContactClick}
// //               className="ml-1 rounded-full bg-black px-6 py-2 text-white transition hover:bg-gray-800"
// //             >
// //               Contact
// //             </button>
// //           </div>

// //           {/* Mobile Navbar */}
// //           <div className="flex items-center justify-between py-4 md:hidden">
// //             <a href="#home" className="text-lg font-bold text-black">
// //               Maya Sharma
// //             </a>

// //             <button
// //               onClick={() => setIsOpen(!isOpen)}
// //               className="rounded-md bg-black px-3 py-2 text-xl leading-none text-white"
// //             >
// //               {isOpen ? "×" : "☰"}
// //             </button>
// //           </div>

// //           {/* Mobile Dropdown */}
// //           {isOpen && (
// //             <div className="md:hidden">
// //               <div className="space-y-2 border-t border-gray-200 bg-white py-4">
// //                 {menuItems.map((item) => (
// //                   <a
// //                     key={item.href}
// //                     href={item.href}
// //                     onClick={handleClick}
// //                     className="block rounded-lg px-4 py-3 font-medium text-black hover:bg-gray-100"
// //                   >
// //                     {item.label}
// //                   </a>
// //                 ))}

// //                 <button
// //                   onClick={handleContactClick}
// //                   className="block w-full rounded-full bg-black px-4 py-3 text-center font-medium text-white hover:bg-gray-800"
// //                 >
// //                   Contact
// //                 </button>

// //                 <div className="flex justify-center space-x-6 pt-3">
// //                   <a
// //                     href="https://www.instagram.com/its_mayasharma?igsh=cmVsY210MTBjeGho&utm_source=qr"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="text-2xl hover:text-pink-500"
// //                   >
// //                     <FaInstagram />
// //                   </a>

// //                   <a
// //                     href="https://www.facebook.com/share/1AxqyP4Jz8/?mibextid=wwXIfr"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="text-2xl hover:text-blue-600"
// //                   >
// //                     <FaFacebookF />
// //                   </a>

// //                   <a
// //                     href="https://x.com/artist_maya?s=21&t=J4KOhVKVACtbhyY8h_9CQg"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="text-2xl hover:text-black"
// //                   >
// //                     <FaXTwitter />
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </nav>

// //       <Contact
// //         isOpen={isContactOpen}
// //         onClose={() => setIsContactOpen(false)}
// //       />
// //     </>
// //   );
// // };

// // export default Navbar;



// import React, { useState } from "react";
// import Contact from "./Contact";
// import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isContactOpen, setIsContactOpen] = useState(false);

//   const menuItems = [
//     { label: "About", href: "#about" },
//     { label: "Theatre", href: "#theatre" },
//     { label: "Film & TV", href: "#film-tv" },
//     { label: "Film Production", href: "#film-production" },
//     { label: "Art Works", href: "#artworks" },
//     { label: "Gallery", href: "#gallery" },
//   ];

//   const handleClick = () => setIsOpen(false);

//   const handleContactClick = () => {
//     setIsOpen(false);
//     setIsContactOpen(true);
//   };

//   return (
//     <>
//       <nav className="fixed left-0 top-0 z-50 w-full bg-white shadow-sm">

//         {/* 🔥 FULL WIDTH ICON CONTAINER (FIXED ISSUE) */}
//         <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 hidden md:flex justify-end pr-[80px] space-x-5">
//           <a
//             href="https://www.instagram.com/its_mayasharma"
//             target="_blank"
//             className="text-xl hover:text-pink-500"
//           >
//             <FaInstagram />
//           </a>

//           <a
//             href="https://www.facebook.com/share/1AxqyP4Jz8/"
//             target="_blank"
//             className="text-xl hover:text-blue-600"
//           >
//             <FaFacebookF />
//           </a>

//           <a
//             href="https://x.com/artist_maya"
//             target="_blank"
//             className="text-xl hover:text-black"
//           >
//             <FaXTwitter />
//           </a>
//         </div>

//         <div className="mx-auto max-w-7xl px-6">
//           {/* Desktop Navbar */}
//           <div className="hidden items-center justify-center py-4 font-medium text-black md:flex">
//             {menuItems.map((item) => (
//               <a
//                 key={item.href}
//                 href={item.href}
//                 className="mx-4 hover:text-gray-600"
//               >
//                 {item.label}
//               </a>
//             ))}

//             <button
//               onClick={handleContactClick}
//               className="ml-1 rounded-full bg-black px-6 py-2 text-white hover:bg-gray-800"
//             >
//               Contact
//             </button>
//           </div>

//           {/* Mobile Navbar */}
//           <div className="flex items-center justify-between py-4 md:hidden">
//             <a href="#home" className="text-lg font-bold text-black">
//               Maya Sharma
//             </a>

//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="rounded-md bg-black px-3 py-2 text-xl text-white"
//             >
//               {isOpen ? "×" : "☰"}
//             </button>
//           </div>

//           {/* Mobile Dropdown */}
//           {isOpen && (
//             <div className="md:hidden">
//               <div className="space-y-2 border-t border-gray-200 bg-white py-4">
//                 {menuItems.map((item) => (
//                   <a
//                     key={item.href}
//                     href={item.href}
//                     onClick={handleClick}
//                     className="block px-4 py-3"
//                   >
//                     {item.label}
//                   </a>
//                 ))}

//                 <button
//                   onClick={handleContactClick}
//                   className="w-full bg-black text-white py-3 rounded-full"
//                 >
//                   Contact
//                 </button>

//                 <div className="flex justify-center space-x-6 pt-3">
//                   <FaInstagram />
//                   <FaFacebookF />
//                   <FaXTwitter />
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       <Contact
//         isOpen={isContactOpen}
//         onClose={() => setIsContactOpen(false)}
//       />
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import Contact from "./Contact";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Theatre", href: "#theatre" },
    { label: "Film & TV", href: "#film-tv" },
    { label: "Film Production", href: "#film-production" },
    { label: "Art Works", href: "#artworks" },
    { label: "Gallery", href: "#gallery" },
    { label: "Media", href: "#media" },
  ];

  const handleMenuClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);

    const section = document.getElementById(href.replace("#", ""));
    if (section) {
      const navbarHeight = 72;
      const top =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    setIsOpen(false);
    setIsContactOpen(true);
  };

  return (
    <>
      <nav className="fixed left-0 top-0 z-50 w-full bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6">
          {/* Desktop Navbar */}
          <div className="hidden items-center justify-center py-4 font-medium text-black md:flex">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleMenuClick(e, item.href)}
                className="mx-4 hover:text-gray-600"
              >
                {item.label}
              </a>
            ))}

            <button
              onClick={handleContactClick}
              className="ml-1 rounded-full bg-black px-6 py-2 text-white transition hover:bg-gray-800"
            >
              Contact
            </button>
          </div>

          {/* Desktop Social Icons */}
          <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 items-center space-x-5 md:flex">
            <a
              href="https://www.instagram.com/its_mayasharma?igsh=cmVsY210MTBjeGho&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-black transition hover:text-pink-500"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/share/1AxqyP4Jz8/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-black transition hover:text-blue-600"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://x.com/artist_maya?s=21&t=J4KOhVKVACtbhyY8h_9CQg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-black transition hover:text-black"
            >
              <FaXTwitter />
            </a>
          </div>

          {/* Mobile Navbar */}
          <div className="flex items-center justify-between py-4 md:hidden">
            <a href="#home" className="text-lg font-bold text-black">
              Maya Sharma
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-md bg-black px-3 py-2 text-xl leading-none text-white"
            >
              {isOpen ? "×" : "☰"}
            </button>
          </div>

          {/* Mobile Dropdown */}
          {isOpen && (
            <div className="md:hidden">
              <div className="space-y-2 border-t border-gray-200 bg-white py-4">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleMenuClick(e, item.href)}
                    className="block rounded-lg px-4 py-3 font-medium text-black hover:bg-gray-100"
                  >
                    {item.label}
                  </a>
                ))}

                <button
                  onClick={handleContactClick}
                  className="w-full rounded-full bg-black py-3 text-white hover:bg-gray-800"
                >
                  Contact
                </button>

                <div className="flex justify-center space-x-6 pt-3">
                  <a
                    href="https://www.instagram.com/its_mayasharma?igsh=cmVsY210MTBjeGho&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-black hover:text-pink-500"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="https://www.facebook.com/share/1AxqyP4Jz8/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-black hover:text-blue-600"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="https://x.com/artist_maya?s=21&t=J4KOhVKVACtbhyY8h_9CQg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-black hover:text-black"
                  >
                    <FaXTwitter />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <Contact
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
};

export default Navbar;