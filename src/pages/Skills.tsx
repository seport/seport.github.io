import React, { createRef, useEffect, useRef, useState } from "react";
import { color, hierarchy, interpolateRgb, scaleOrdinal, schemeCategory10, select, treemap } from "d3";
import { notesData, treemapData } from "@/recommendedReading";
import useWindowSize from "@/hooks/useWindowSize";
import { Modal } from "@/components/Modal";
import Markdown from "markdown-to-jsx";

export const skillsRef = createRef<HTMLDivElement>();

const Skills = () => {
  // const location = useWindowLocation();
  const svgRef = createRef<SVGSVGElement>()
  const { x: windowWidth } = useWindowSize()
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<keyof typeof notesData>()

  const renderTreeMap = () => {
    const svg = select(svgRef.current)

    // clear previous treemap if this is a re-render
    svg.selectAll("*").remove();

    // width is 1000 on mobile, and at most 900 on desktop
    const svgWidth = Math.min(900, window.innerWidth - 32)
    // height is 400 on mobile, 900 on desktop
    const svgHeight = window.innerWidth >= 660 ? 900 : 500

    svg.attr('width', svgWidth).attr('height', svgHeight)

    const root = hierarchy(treemapData)
      .sum((d: any) => d.value)
      .sort((a, b) => b.value - a.value)

    const treemapRoot = treemap()
      .size([svgWidth, svgHeight])
      .padding(3)(root)

    const nodes = svg.selectAll('g')
      .data(treemapRoot.leaves())
      .join('g')
      .attr('transform', d => `translate(${d.x0},${d.y0})`)

    const colorScale = (category: string) => {
      switch (category) {
        case "Frontend":
          return "rgb(167,208,196)"
        case "Backend":
          return "rgb(133,194,238)"
        case "Testing":
          return "rgb(204,204,255)"
        default:
          return "rgb(255,255,255)"
      }
    }

    nodes.append('rect')
      .attr('id', (d: any) => `treemap-${d.data.id}`)
      .attr('class', "treemap-node")
      .attr('width', (d) => d.x1 - d.x0)
      .attr('height', (d) => d.y1 - d.y0)
      .attr('fill', (d: any) => colorScale(d.data.category))
      .attr('stroke', 'rgba(0,0,0,0)')

    nodes.append('text')
      .text((d: any) => d.data.name)
      .attr('font-size', '24px')
      .attr('fill', 'white')
      .attr('stroke', 'none')
      .attr('x', 8)
      .attr('y', 44)

    nodes.append('text')
      .text((d: any) => d.data.category)
      .attr('font-size', '16px')
      .attr('fill', 'white')
      .attr('stroke', 'none')
      .attr('x', 8)
      .attr('y', 20)
  }

  const openModal = (event: any) => {
    const id = event.target.id.split('-')[1]
    setModalContent(id)
    setModalIsOpen(true)
  }
  useEffect(() => {
    if (svgRef.current) {
      renderTreeMap()
      Array.from(document.getElementsByClassName('treemap-node')).map((node) => {
        node.addEventListener('click', openModal)
      })
    }
    return () => {
      Array.from(document.getElementsByClassName('treemap-node')).map((node) => {
        node.removeEventListener('click', openModal)
      })
    }
  }, [svgRef, windowWidth])

  return (
    <div id="skills" ref={skillsRef}>
      <h2>
        Technology is neat.
        <br />
        Here's some of my favorites.
      </h2>
      <div className="treemap-container">
        <svg ref={svgRef} />
      </div>
      <Modal isOpen={modalIsOpen} toggleOpen={() => { setModalIsOpen(!modalIsOpen) }}>
        <Markdown>
          {notesData[modalContent] || "Nothing here."}
        </Markdown>
      </Modal>
      {/* <Carousel isShifted={location.search.skill}>
        <CarouselPage>
          <SkillList />
        </CarouselPage>
        <CarouselPage>
          <div className="recommended-reading__container">
            <Card width="100%">
              <div style={{ width: "100%" }}>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav({ target: "skills", query: { skill: "" } });
                  }}
                >
                  Back to skill list
                </a>
              </div>
              <RecommendedReading language={location.search.skill} />
            </Card>
          </div>
        </CarouselPage>
      </Carousel> */}
    </div>
  );
};

export default Skills;
