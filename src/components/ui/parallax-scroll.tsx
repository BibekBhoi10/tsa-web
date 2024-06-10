import { useRef, useState } from "react"; // Importing useRef and useState
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { BackgroundGradient } from "./background-gradient";

export const ParallaxScroll = ({
    images,
    className,
}: {
    images: string[];
    className?: string;
}) => {
    const gridRef = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        container: gridRef,
        offset: ["start start", "end start"],
    });

    // Define the translation values for parallax effect
    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleClick = (image: string) => {
        setSelectedImage(image);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    const third = Math.ceil(images.length / 3);
    const firstPart = images.slice(0, third);
    const secondPart = images.slice(third, 2 * third);
    const thirdPart = images.slice(2 * third);

    return (
        <div
            className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
            ref={gridRef}
        >
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-10 py-40 px-10"
                ref={gridRef}
            >
                <div className="grid gap-10">
                    {firstPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateFirst }}
                            key={"grid-1" + idx}
                            onClick={() => handleClick(el)}
                        >
                            <Image
                                src={el}
                                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 shadow-2xl"
                                height="400"
                                width="400"
                                alt="thumbnail"
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {secondPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateSecond }}
                            key={"grid-2" + idx}
                            onClick={() => handleClick(el)}
                        >
                            <Image
                                src={el}
                                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 shadow-2xl"
                                height="400"
                                width="400"
                                alt="thumbnail"
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {thirdPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateThird }}
                            key={"grid-3" + idx}
                            onClick={() => handleClick(el)}
                        >
                            <Image
                                src={el}
                                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 shadow-2xl"
                                height="400"
                                width="400"
                                alt="thumbnail"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 flex items-center justify-center z-50"
                        onClick={handleClose}
                    >
                        <Image
                            src={selectedImage}
                            className="max-w-full max-h-full"
                            alt="selected"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
