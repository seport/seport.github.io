import React, { useEffect } from "react";
import useScroll from "@/hooks/useScroll";
import { useBackground } from "@/contexts/backgroundContext";

export const heroRef = React.createRef<HTMLDivElement>();

const Hero = () => {
    const scrollY = useScroll();
    const { setBackground } = useBackground()

    useEffect(() => {
        const sectionHeight = heroRef.current.scrollHeight
        if (scrollY < sectionHeight) {
            const opacity = 1 - Math.min(scrollY / sectionHeight, 1)
            setBackground(`rgba(242,230,234,${opacity})`)

        }
    }, [scrollY])

    return (
        <div id="about" ref={heroRef}>
            <h1>
                Hi, I'm Sarah. 👋 <br /> I make websites and things.
            </h1>
        </div>
    );
};
export default Hero;
