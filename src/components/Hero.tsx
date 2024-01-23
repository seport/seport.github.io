import React, { createRef, useEffect } from "react";
import useScroll from "@/hooks/useScroll";
import { useBackground } from "@/contexts/backgroundContext";
import { Banner } from "@/components/Banner";
import BobaIcon from "@/images/boba.svg"

export const heroRef = createRef<HTMLDivElement>();

const Hero = () => {
    const scrollY = useScroll();
    const { setBackground } = useBackground()

    useEffect(() => {
        const sectionHeight = heroRef.current.scrollHeight
        if (scrollY < sectionHeight) {
            const opacity = 1 - Math.min(scrollY / sectionHeight, 1)
            setBackground(`rgba(242,230,234,${opacity})`)
        } else {
            setBackground('rgba(242,230,234,0')
        }
    }, [scrollY])

    return (
        <><Banner color='boba' button={<a href="https://www.google.com/maps/search/boba" target="_blank">Get boba</a>} icon={<BobaIcon />}> This website is best viewed with boba.</Banner>
            <div id="about" ref={heroRef}>
                <h1>
                    Hi, I'm Sarah. 👋 <br /> I make websites and things.
                </h1>
            </div></>
    );
};
export default Hero;
