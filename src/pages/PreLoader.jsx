// import { useEffect, useState } from "react";
// import eduLogo from "../utils/imgs/edu_dash_logo.png";

// export default function Preloader({ onLoaded }) {
//   const [animateSwipe, setAnimateSwipe] = useState(false);

//   useEffect(() => {
//     // Show logo bounce for 1.5s before swipe
//     const timer = setTimeout(() => {
//       setAnimateSwipe(true); // start swipe animation
//       // remove preloader after swipe animation (1s)
//       setTimeout(() => onLoaded(), 1000);
//     }, 100); 

//     return () => clearTimeout(timer);
//   }, [onLoaded]);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         background: "#fff",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         zIndex: 9999,
//         overflow: "hidden",
//       }}
//     >
//       {/* Logo in center */}
//       <img
//         src={eduLogo}
//         alt="EDU Dash Logo"
//         style={{
//           width: "180px",
//           animation: "bounce 1.5s ease-in-out infinite",
//           zIndex: 10,
//         }}
//       />

//       {/* Swipe animation overlay */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           background: "#fff",
//           transform: animateSwipe ? "translateX(100%)" : "translateX(0%)",
//           transition: "transform 1s ease-in-out",
//           zIndex: 20,
//         }}
//       ></div>

//       <style>{`
//         @keyframes bounce {
//           0% { transform: scale(0.9); }
//           50% { transform: scale(1.05); }
//           100% { transform: scale(1); }
//         }
//       `}</style>
//     </div>
//   );
// }
