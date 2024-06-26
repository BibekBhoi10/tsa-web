import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setActive(item);
    setIsClicked(!isClicked);
    setIsOpen(!isOpen);
  };
  
  return (
    <div onClick={handleClick} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:opacity-[0.9] dark:text-white"
      >
        {isOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
      </motion.p>
      {isClicked && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
            <motion.div
              transition={transition}
              layoutId="active" // layoutId ensures smooth animation
              className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
            >
              <motion.div
                layout // layout ensures smooth animation
                className="w-max h-full p-4"
              >
                {children}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav className="relative rounded-full boder border-transparent dark:bg-black dark:border-white/[0.2] bg-transparent shadow-input flex justify-end space-x-4 px-20 py-6 ">
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  const handleClick = () => {
    window.location.href = href; // Redirect to href on click
  };

  return (
    <div onClick={handleClick} className="flex space-x-2 cursor-pointer">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export const HoveredLink = ({ children, href, ...rest }: any) => {
  const handleClick = () => {
    window.location.href = href; // Redirect to href on click
  };

  return (
    <button
      onClick={handleClick}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black"
    >
      {children}
    </button>
  );
};