"use client";
import { ParallaxScroll } from "../ui/parallax-scroll";
import Image from "next/image";
import Image1 from "@/assets/photo1.jpg"
import Image2 from "@/assets/photo2.jpg"
import Image3 from "@/assets/photo3.jpg"

export function ParallaxScrollDemo() {
  return <ParallaxScroll images={images} />;
}

const images = [
    Image1,
    Image2,
    Image3,
    Image2,
    Image3,
    Image1,
    Image3,
    Image2,
    Image1,
]
