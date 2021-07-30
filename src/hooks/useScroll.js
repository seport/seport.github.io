import {useState, useEffect} from 'react'

const useScroll = () => {
    const [scrollY, setScrollY] = useState(0);

    const onScroll = () => {
        setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", onScroll);

    return scrollY;
};

export default useScroll;