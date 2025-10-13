'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
// import { useTypewriter } from 'react-simple-typewriter';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    heading: 'Hey, I am Amit',
    description: `“This is Amit Nishad , Currently I am in Lucknow for my NEET Preparation aimed 2027 ⚕”`,
    image: '/images/amit.PNG',
  },
  {
    heading: 'Hey , I am Kaish',
    description: `“This is Kaish Raza, Currently I am in Lucknow for my NEET Preparation aimed 2027 🎯”`,
    image: '/images/kaish.PNG',
  },
  {
    heading: 'Hey , I am Krishna',
    description: `“This is Krishna Sharma , Currently I am in Kushinagar and I am completing my school also I am an online student of Arjuna JEE aimed 2027 🎯”`,
    image: '/images/krishna.PNG',
  },
  {
    heading: 'Hey, I am Anuj',
    description: `“This is Anuj Chowdhury , Currently I am in Kushinagar district , UP and I am an online student of Arjuna JEE and aimed Boards and JEE 2027 💻”`,
    image: '/images/anuj.PNG',
  },
];

const Hero = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [displayedHeading, setDisplayedHeading] = useState(slides[0].heading);

  const [typewriterText, setTypewriterText] = useState('');

  // Re-run typewriter when heading changes
  useEffect(() => {
    let index = 0;
    const text = slides[currentSlideIndex].heading;
    setTypewriterText('');

    const interval = setInterval(() => {
      if (index < text.length) {
        setTypewriterText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80); // typing speed

    return () => clearInterval(interval);
  }, [currentSlideIndex]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5500,
    arrows: false,
    beforeChange: (_: number, next: number) => {
      setCurrentSlideIndex(next);
    },
  };

  return (
    <section className="bg-white text-black pb-16 sm:px-8">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="flex flex-col-reverse md:flex-row items-center justify-center max-w-6xl mx-auto gap-6 p-4">
              {/* Left Text */}
              <div className="md:w-1/2 text-center md:text-left space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold text-purple-600">
                  {index === currentSlideIndex ? typewriterText : slide.heading}
                </h1>
                <p className="text-lg text-gray-600">{slide.description}</p>
              </div>

              {/* Right Image */}
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src={slide.image}
                  alt={slide.heading}
                  width={550}
                  height={400}
                  className="rounded-2xl shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
