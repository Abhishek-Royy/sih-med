import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 2000,

  };
  return (
    <>
      <Slider  {...settings}>
        <section style={{ boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
          <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <figure class="max-w-screen-md mx-auto">
              <svg
                class="h-12 mx-auto mb-3 text-gray-500 "
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p class="text-2xl font-medium text-gray-900 ">
                  "We no longer struggle with paper-based records or outdated
                  spreadsheets. It's a game-changer for those looking to
                  modernize their data management. "
                </p>
              </blockquote>
              <figcaption class="flex items-center justify-center mt-6 space-x-3">
                <img
                  class="w-6 h-6 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                />
                <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div class="pr-3 font-medium text-gray-900 ">
                    Micheal Gough
                  </div>
                  {/* <div class="pl-3 text-sm font-light text-gray-500 ">
                  CEO at Google
                </div> */}
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
        <section style={{ boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
          <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <figure class="max-w-screen-md mx-auto">
              <svg
                class="h-12 mx-auto mb-3 text-gray-500 "
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p class="text-2xl font-medium text-gray-900 ">
                  "Queue's integrated modules help in seamless information sharing between departments, ensuring that everyone is on the same page. It has increased our efficiency."
                </p>
              </blockquote>
              <figcaption class="flex items-center justify-center mt-6 space-x-3">
                <img
                  class="w-6 h-6 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                />
                <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div class="pr-3 font-medium text-gray-900 ">
                    Micheal Gough
                  </div>
                  {/* <div class="pl-3 text-sm font-light text-gray-500 ">
                  CEO at Google
                </div> */}
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
        <section style={{ boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
          <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <figure class="max-w-screen-md mx-auto">
              <svg
                class="h-12 mx-auto mb-3 text-gray-500 "
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p class="text-2xl font-medium text-gray-900 ">
                  "SwasthSeva smart queues solution has improved our patient's experience and has given us tools for digital patient engagement. "
                </p>
              </blockquote>
              <figcaption class="flex items-center justify-center mt-6 space-x-3">
                <img
                  class="w-6 h-6 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                />
                <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div class="pr-3 font-medium text-gray-900 ">
                    Micheal Gough
                  </div>
                  {/* <div class="pl-3 text-sm font-light text-gray-500 ">
                  CEO at Google
                </div> */}
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      </Slider>
    </>
  );
}

export default Testimonial;
