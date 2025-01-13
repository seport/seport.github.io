import { blogsRef } from "@/components/Blogs"
import { contactRef } from "@/components/Contact"
import { heroRef } from "@/components/Hero"
import { projectsRef } from "@/components/Projects"
import { skillsRef } from "@/components/Skills"

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
