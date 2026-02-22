import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Cursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <motion.div
      className="fixed pointer-events-none w-4 h-4 bg-[#dfb44b] rounded-full z-50"
      style={{
        x: mousePos.x - 4,
        y: mousePos.y - 4,
      }}
      animate={{ x: mousePos.x - 4, y: mousePos.y - 4 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
}
