import React, { useEffect, useState } from "react";
import planeImage from "../assets/images/plane-ills.png"; // Uçak görselinin yolunu ayarla
import "../styles/BackgroundAnimation.css";


const BackgroundAnimation = () => {
    const [positionX, setPositionX] = useState(10); // Uçağın başlangıç yatay konumu
    const [positionY, setPositionY] = useState(50); // Uçağın başlangıç dikey konumu
    const [directionX, setDirectionX] = useState(1); // 1 = sağa, -1 = sola
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY; // Sayfa kaydırma miktarı
        const maxMoveX = window.innerWidth - 150; // Sayfanın en sağ noktası
        const maxMoveY = document.body.scrollHeight - window.innerHeight; // En aşağı noktası
  
        setPositionX((prevX) => {
          const newX = prevX + directionX * scrollY * 0.02; // X ekseni hareketi
          if (newX >= maxMoveX || newX <= 10) {
            setDirectionX(-directionX); // Yön değiştir
          }
          return newX;
        });
  
        setPositionY(scrollY * 2); // Uçağı yavaşça aşağı kaydır
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [directionX]);
  
    return (
      <img
        src={planeImage}
        alt="Moving Plane"
        className="moving-plane"
        style={{
          transform: `translate(${positionX}px, ${positionY}px) scaleX(${directionX})`,
        }}
      />
    );
  };
  
  export default BackgroundAnimation;