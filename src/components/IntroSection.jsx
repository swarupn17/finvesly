import React, { useEffect, useRef, useState } from 'react';
import '../styles/IntroSection.css';
import edu1 from '../assets/edu1.jpg';
import edu2 from '../assets/edu2.JPG';
import edu3 from '../assets/edu3.jpg';
import edu4 from '../assets/edu4.jpg';

const IntroSection = () => {
  const sectionRef = useRef(null);
  const ipadRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ipadRef.current) {
        const rect = ipadRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Animation starts as soon as the TOP of the iPad enters the viewport
        const startPoint = windowHeight;
        const currentPosition = rect.top;
        
        // Animation completes after moving up just 400px (very fast)
        // This ensures it's done well before it hits the top of the screen
        const scrollDistance = 400;
        
        let p = (startPoint - currentPosition) / scrollDistance;
        
        // Clamp value between 0 and 1
        if (p < 0) p = 0;
        if (p > 1) p = 1;
        
        setProgress(p);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Images data with continuous overlapping sequence
  const floatingImages = [
    // Top Pair (First)
    { src: edu1, x: -420, y: -220, start: 0.0, end: 0.5 },
    { src: edu2, x: 420, y: -220, start: 0.0, end: 0.5 },
    
    // Middle Pair (Second)
    { src: edu3, x: -520, y: 20, start: 0.2, end: 0.7 },
    { src: edu4, x: 520, y: 20, start: 0.2, end: 0.7 },
    
    // Bottom Pair (Third)
    { src: "https://nicolelapin.com/wp-content/uploads/2023/02/nl-gma3.jpg", x: -420, y: 260, start: 0.4, end: 0.9 },
    { src: "https://nicolelapin.com/wp-content/uploads/2023/10/nicole-tamron-hall.jpg", x: 420, y: 260, start: 0.4, end: 0.9 },
  ];

  const getStaggeredProgress = (globalProgress, start, end) => {
    if (globalProgress < start) return 0;
    if (globalProgress > end) return 1;
    return (globalProgress - start) / (end - start);
  };

  return (
    <section className="intro-section" ref={sectionRef}>
      <div className="intro-text">
        <h2>BOUNDLESS ADVICE. BOUND TO SUCCEED.</h2>
        <p>
          Whoever told you money <strong>can't</strong> buy happiness was probably not
          good at managing <strong>it</strong>. Learn from my experience and see how
          simple tricks can change your financials, career and relationships.
        </p>
      </div>

      <div className="images-container">
        {/* Central Image (iPad) */}
        <div className="center-image-wrapper" ref={ipadRef}>
            <img 
              src="https://nicolelapin.com/wp-content/uploads/2023/10/nicole-foundermade-ipad.png" 
              alt="Nicole Lapin Speaking" 
              className="center-image"
            />
        </div>

        {/* Floating Images */}
        {floatingImages.map((img, index) => {
          const localProgress = getStaggeredProgress(progress, img.start, img.end);
          // Scale from 0.8 to 1 as they move out to give depth effect
          const scale = 0.8 + (0.2 * localProgress);
          
          return (
            <div 
              key={index} 
              className="floating-image-wrapper"
              style={{
                transform: `translate(${img.x * localProgress}px, ${img.y * localProgress}px) rotate(${localProgress * (index % 2 === 0 ? 5 : -5)}deg) scale(${scale})`,
                zIndex: 1 // Ensure they are behind the center image (which is z-index 10)
              }}
            >
              <img src={img.src} alt={`Media appearance ${index + 1}`} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default IntroSection;
