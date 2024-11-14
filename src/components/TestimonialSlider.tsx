import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  rating: number;
  image: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [direction, setDirection] = useState('next'); // Track direction for animation

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextTestimonial = useCallback(() => {
    setDirection('next');
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + slidesToShow;
      return nextIndex >= testimonials.length ? 0 : nextIndex;
    });
  }, [slidesToShow, testimonials.length]);

  const previousTestimonial = () => {
    setDirection('prev');
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - slidesToShow;
      return nextIndex < 0 ? Math.max(testimonials.length - slidesToShow, 0) : nextIndex;
    });
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  const translateX = -(currentIndex * (100 / slidesToShow));

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-live="polite">
      <div className="flex items-center relative overflow-hidden">
        <button
          onClick={previousTestimonial}
          className="absolute left-0 z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>

        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-4"
            style={{
              transform: `translateX(${translateX}%)`,
              transitionProperty: 'transform',
              transitionTimingFunction: 'ease-in-out',
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="flex-shrink-0"
                style={{ width: `${100 / slidesToShow}%` }}
                role="group"
                aria-roledescription="testimonial"
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl h-full">
                  <div className="flex items-center mb-4">
                    <img
                      className="h-12 w-12 rounded-full object-cover"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm italic line-clamp-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? 'fill-current' : 'stroke-current'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextTestimonial}
          className="absolute right-0 z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(testimonials.length / slidesToShow) }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index * slidesToShow);
              setDirection(index > Math.floor(currentIndex / slidesToShow) ? 'next' : 'prev');
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              Math.floor(currentIndex / slidesToShow) === index
                ? 'bg-indigo-600 dark:bg-indigo-400'
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
            aria-label={`Go to testimonial group ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
