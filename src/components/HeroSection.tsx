'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTypewriter } from 'react-simple-typewriter';
import Slider from 'react-slick';

const slides = [
  {
    heading: 'Hey, I am Anuj',
    description: `“This is Anuj Chowdhury , Currently I am in Kushinagar district , UP and I am an online student of Arjuna JEE and aimed Boards and JEE 2027 💻”`,
    image: '/images/anujimg.png' ,
  },
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
];

const Hero = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);  // Track the current slide
  const [text, setText] = useState(slides[0].heading);  // Store the text for typewriter effect

  // Use typewriter hook
  const [typewriterText] = useTypewriter({
    words: [text],
    loop: false,
    delaySpeed: 1000,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    beforeChange: (current: number, next: number) => {
      setCurrentSlideIndex(next);  // Update slide index before each change
    },
  };

  // Trigger typewriter effect when the slide changes
  useEffect(() => {
    setText(slides[currentSlideIndex].heading);  // Update the heading for typewriter
  }, [currentSlideIndex]);

  return (
    <section className="bg-white text-black pb-16 sm:px-8">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="flex flex-col-reverse md:flex-row items-center max-w-7xl mx-auto">
              {/* Left side: Text */}
              <div className="md:w-1/2 text-center md:text-left space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold">
                  {index === currentSlideIndex ? typewriterText : slide.heading}
                </h1>
                <p className="text-lg z-50 text-gray-600">{slide.description}</p>
              </div>

              {/* Right side: Image */}
              <div className="md:w-1/2 mb-6 md:mb-0">
              
                <Image
                  src={slide.image}
                  alt={slide.heading}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md object-cover"
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
