
import React, { useState, useEffect } from "react";
import { BiSolidColor } from "react-icons/bi";
import { FaCirclePlus, FaHeart, FaLock, FaRegHeart, FaUnlock } from "react-icons/fa6";
import { LuHeartOff } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";

const generateRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export default function App() {
  const [colors, setColors] = useState(
    Array.from({ length: 1 }, () => ({ color: generateRandomColor(), locked: false, liked: false }))
  );

  const generatePalette = () => {
    setColors((prevColors) =>
      prevColors.map((item) => (item.locked ? item : { ...item, color: generateRandomColor(), liked:false }))
    );
    
  };

  const toggleLock = (index) => {
    setColors((prevColors) =>
      prevColors.map((item, i) => (i === index ? { ...item, locked: !item.locked } : item))
    );
  };

  const toggleLike = (index) => {
    setColors((prevColors) =>
      prevColors.map((item, i) => (i === index ? { ...item, liked: !item.liked } : item))
    );
  };

  const addNewColor = (index) => {
    setColors((prevColors) => {
      const newColor = { color: generateRandomColor(), locked: false, liked: false };
      return [...prevColors.slice(0, index + 1), newColor, ...prevColors.slice(index + 1)];
    });
  };

  const updateColor = (index, newColor) => {
    setColors((prevColors) =>
      prevColors.map((item, i) => (i === index ? { ...item, color: newColor } : item))
    );
  };

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
    alert(`Copied Color: ${color}`);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(event);
      
      if (event.code === "Space") {
        event.preventDefault();
        generatePalette();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    
  }, []);

  return (
    <div className="w-full flex h-[100vh] ">
      {colors.map((item, index) => (
        <div
          key={index}
          className="flex-1 h-full relative cursor-pointer font-bold"
          style={{ backgroundColor: item.color }}
          
        >
          <h1 className="text-center text-2xl mt-64" onClick={() => copyToClipboard(item.color)}>{item.color}</h1>

         <button className="absolute top-2 left-[47.5%] p-2 rounded-full" onClick={()=> setColors(colors.filter((e)=>e.color !== item.color))} >
        
            <IoCloseSharp size={22} />
         
         </button >
        
          <button className="absolute top-2 right-2 p-2 rounded-full" onClick={(e) => { e.stopPropagation(); toggleLock(index); }}>
            {item.locked ? <FaLock size={18}/>  : <FaUnlock size={18}/> }
          </button>

          
          <button className="absolute bottom-2 right-2 p-2 rounded-full" onClick={(e) => { e.stopPropagation(); toggleLike(index); }}>
            {item.liked ? <FaHeart  className="text-red-500"/>   : <LuHeartOff size={18}/> }
          </button>

        
          <div className="absolute bottom-2 left-2">
            <label className="cursor-pointer flex items-center gap-1 px-2 py-1 rounded">
              {/* { <BiSolidColor size={18} />} */}
              <input
                type="color"
                value={item.color}
                className="w-6 h-6 border-none cursor-pointer"
                onChange={(e) => updateColor(index, e.target.value)}
              />
            </label>
          </div>

          <button className="absolute top-2 left-2 p-2  rounded-full" onClick={() => addNewColor(index)}>
          <FaCirclePlus />
          </button>
        </div>
      ))}

     
    </div>
  );
}

