import {useState, useEffect} from 'react'
import useScroll from './useScroll';

const useIsVisible = (ref: React.RefObject<HTMLElement>) => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollY = useScroll();

    useEffect(() => {
        const top = ref.current.offsetTop;
        const height = ref.current.offsetHeight;
        const scrollPosition = height - top;

        if(scrollY < (scrollPosition) && scrollY >= top) {
            if(isVisible === false) {
                setIsVisible(true)
            }
        } else {
            if(isVisible === true) {
                setIsVisible(false)
            }
        }

    }, [scrollY])

    return isVisible;
};

export default useIsVisible;