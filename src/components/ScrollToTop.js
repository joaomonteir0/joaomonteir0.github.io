import React, { useState, useEffect } from 'react'
import { HiArrowUp } from 'react-icons/hi'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 btn btn-circle btn-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <HiArrowUp className="text-xl" />
        </button>
      )}
    </>
  );
}

export default ScrollToTop
