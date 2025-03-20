import { useState } from 'react';
// import testimonial1 from '../assets/testimonial1.webp';
// import testimonial2 from '../assets/testimonial2.webp';
// import testimonial3 from '../assets/testimonial3.webp';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: 'This system helped me detect heart disease early. Amazing experience!',
      author: 'John Doe',
    //   image: testimonial1,
    },
    {
      text: 'Easy to use and very accurate diagnosis. Highly recommend it!',
      author: 'Jane Smith',
    //   image: testimonial2,
    },
    {
      text: 'The doctor consultation feature saved my life!',
      author: 'Emily Johnson',
    //   image: testimonial3,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden mt-8">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full p-4 bg-gray-100 rounded-lg shadow">
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="w-16 h-16 object-cover rounded-full mb-4"
            />
            <p className="text-gray-700 italic">"{testimonial.text}"</p>
            <h4 className="mt-2 font-bold text-blue-600">- {testimonial.author}</h4>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
