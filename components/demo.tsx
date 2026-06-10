"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function MeetMarkCohen() {
  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden min-h-[600px] md:min-h-[700px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/ken-j.png"
          alt="Mortgage Broker Background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>
<<<<<<< HEAD

=======
<div className="mt-4 flex  gap-4">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/kenschmidtchicago/"
                  className="flex items-center gap-2 text-white"
                  rel="noopener noreferrer"
                >
                  <span className="[&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                    </svg>
                  </span>
                </Link>

                <Link
                  target="_blank"
                  href="https://www.facebook.com/HuntingtonBank"
                  className="flex items-center text-white gap-2"
                >
                  <span className="[&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                  </span>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/huntingtonbank/?hl=en"
                  className="flex items-center text-white gap-2"
                >
                  {" "}
                  <span className="[&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </span>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.youtube.com/user/HuntingtonBank"
                  className="flex items-center  text-white gap-2"
                >
                  <span className="[&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 576 512"
                    >
                      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                    </svg>
                  </span>
                </Link>
                <Link
                  target="_blank"
                  href="https://twitter.com/Huntington_Bank"
                  className="flex items-center text-white gap-2"
                >
                  <span className="[&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                    >
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  </span>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.zillow.com/lender-profile/ken%20schmidt12/"
                  className="flex text-white items-center gap-2"
                >
                  {/* <Image
                    src="eb.png"
                    alt="Ken J. Schmidt"
                    width={30}
                    height={30}
                    priority
                    className="h-12 w-20 object-contain"
                  /> */}
                </Link>
              </div>
>>>>>>> c4a0ab6 (initial commit)
      {/* Animated content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-screen mx-auto px-4 py-10 md:py-16 lg:py-24 sm:px-6 lg:px-8 transition-transform duration-100 ease-out"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Location Badge */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-[#236193]" />
            <span className="text-[#236193] font-semibold tracking-wide">
              Welcome to Your Trusted Advisor
            </span>
          </div>

          {/* Title */}
          <h1 className="w-full text-5xl md:text-6xl lg:text-7xl font-extralight text-white leading-tight mb-6">
            MORTGAGE BROKER
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8 max-w-3xl mx-auto">
           Ken J. Schmidt is a leading mortgage lending expert with over 20
              years of experience in the home financing industry, committed to
              delivering tailored loan solutions designed to meet your unique
              homeownership goals.
          </p>

          {/* Features List */}
          <div className="space-y-3 text-slate-200 mb-8 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#236193] flex-shrink-0" />
              <span>Over 25 Years of Experience</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#236193] flex-shrink-0" />
              <span>Residential & Commercial Financing</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="border-1 border-x-4 bg-transparent border-white hover:bg-[#1a4a70] text-white hover: px-10 py-7 text-lg rounded-none">
              APPLY FOR A LOAN
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}

("use client");

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      if (heroRef.current && contentRef.current) {
        const scrolled = window.scrollY;
        const content = contentRef.current as HTMLElement;
        content.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden min-h-[600px] md:min-h-[700px] lg:min-h-[800px]"
    >
      {/* Background Image with Mobile Optimization */}
      <div className="absolute inset-0 z-0">
        {/* Mobile-specific image positioning */}
        <div className="relative w-full h-full">
          <Image
            src="/img/ken-j.png"
            alt="Mortgage Broker Background"
            fill
            className="object-cover md:object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            style={{
              objectPosition: "center 30%", // Adjusts focus point on mobile
            }}
          />
        </div>

        {/* Gradient Overlay - Mobile Optimized */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 md:bg-gradient-to-r md:from-black/80 md:via-black/50 md:to-transparent"></div>
      </div>

      {/* Animated content - Mobile First Design */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-screen mx-auto px-4 py-12 sm:px-6 lg:px-8 transition-transform duration-100 ease-out"
      >
        <div className="max-w-4xl mx-auto text-center md:text-left md:text-left">
          {/* Location Badge - Mobile Friendly */}
          <div className="flex items-center justify-center md:justify-center gap-2 mb-4 md:mb-5">
            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#236193]" />
            <span className="text-[#236193] font-semibold tracking-wide text-sm md:text-base">
              Welcome to Your Trusted Advisor
            </span>
          </div>

          {/* Title - Responsive Font Sizes for Mobile */}
          <h1 className="w-full text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white leading-tight mb-4 md:mb-6">
            MORTGAGE
            <br className="hidden sm:block" /> BROKER
          </h1>

          {/* Description - Better readability on mobile */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed mb-6 md:mb-8 max-w-3xl mx-auto md:mx-auto px-2 sm:px-0">
            Ken J. Schmidt is a leading mortgage lending expert with over 20
            years of experience in the home financing industry, committed to
            delivering tailored loan solutions designed to meet your unique
            homeownership goals.
          </p>

          {/* Features List - Stacked on mobile, centered */}
          <div className="space-y-3 text-slate-200 mb-6 md:mb-8 max-w-md mx-auto md:mx-auto">
            <div className="flex items-center justify-center md:justify-center gap-3">
              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#236193] flex-shrink-0" />
              <span className="text-sm md:text-base">
                Over 25 Years of Experience
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-center gap-3">
              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#236193] flex-shrink-0" />
              <span className="text-sm md:text-base">
                Residential & Commercial Financing
              </span>
            </div>
          </div>

          {/* CTA Buttons - Full width on mobile */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-center">
            <Button className="border-2 border-white bg-transparent hover:bg-[#236193] hover:border-[#236193] text-white px-6 sm:px-8 md:px-10 py-5 md:py-7 text-base md:text-lg rounded-none transition-all duration-300 w-full sm:w-auto">
              APPLY FOR A LOAN
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile for better UX */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(8px);
            opacity: 0;
          }
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
