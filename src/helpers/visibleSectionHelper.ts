import { blogsRef } from "@/pages/Blogs"
import { contactRef } from "@/pages/Contact"
import { heroRef } from "@/pages/Hero"
import { projectsRef } from "@/pages/Projects"
import { skillsRef } from "@/pages/Skills"

export const getVisibleSection = (scrollY: number) => {
    const sectionRefs = [
        heroRef,
        skillsRef,
        blogsRef,
        projectsRef,
        contactRef,
    ].reverse()
    for (const ref of sectionRefs) {
        const sectionTop = ref.current?.offsetTop || 0
        const windowHeight = window.innerHeight

        if (sectionTop < (scrollY + (windowHeight / 3))) {
            return ref.current?.id
        }
    }
}