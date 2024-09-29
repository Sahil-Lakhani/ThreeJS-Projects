// import React, { useState, useEffect, useRef } from 'react';

// const CustomCursor = () => {
//   const cursorRef = useRef(null);
//   const [trail, setTrail] = useState([]);
//   const lastUpdateTime = useRef(0);
//   const animationFrameId = useRef(null);

//   useEffect(() => {
//     const updatePosition = (e) => {
//       if (cursorRef.current) {
//         cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//       }

//     //   const currentTime = performance.now();
//     //   if (currentTime - lastUpdateTime.current > 50) { // Update trail every 50ms
//     //     // setTrail((prevTrail) => [...prevTrail, { x: e.clientX, y: e.clientY }].slice(-10));
//     //     lastUpdateTime.current = currentTime;
//     //   }
//     };

//         // const animateTrail = () => {
//         //   setTrail((prevTrail) => prevTrail.map((pos, index) => ({
//         //     ...pos,
//         //     opacity: 1 - index * 0.1
//         //   })));
//         //   animationFrameId.current = requestAnimationFrame(animateTrail);
//         // };

//     window.addEventListener('mousemove', updatePosition);
//     // animateTrail();

//     return () => {
//       window.removeEventListener('mousemove', updatePosition);
//     //   cancelAnimationFrame(animationFrameId.current);
//     };
//   }, []);

//   return (
//     <>
//       <div ref={cursorRef} className="custom-cursor" />
//       {trail.map((pos, index) => (
//         <div
//           key={index}
//           className="cursor-trail"
//           style={{
//             transform: `translate(${pos.x}px, ${pos.y}px)`,
//             opacity: pos.opacity,
//           }}
//         />
//       ))}
//     </>
//   );
// };

// export default CustomCursor;