import { useEffect, useRef } from "react";

import { Pagination } from "swiper";
import Div100vh from "react-div-100vh";

import { useInView } from "react-intersection-observer";
import { useSwiperSlide } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ProjectsImage from "./ProjectsImage";

const Projects = ({
  projects,
  setSliderTitle,
  setSwiperIndex,
  swiperIndex,
  english,
}) => {
  const swiperSlide = useSwiperSlide();

  const { ref, inView, entry } = useInView();

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span id="workshopPagination" class="' + className + '">' + "</span>";
    },
  };

  useEffect(() => {
    swiperSlide.isActive ? setSwiperIndex(1) : "";
  });

  return (
    <Div100vh>
      <div className="projectsWrapper">
        <div ref={ref}>
          <Swiper
            slidesPerView={1}
            pagination={pagination}
            modules={[Pagination]}
            loop={true}
            speed={1000}
          >
            {projects.map((project, i) => (
              <SwiperSlide key={i}>
                <Div100vh>
                  <div className="swiperSingle">
                    <ProjectsImage
                      project={project}
                      setSliderTitle={setSliderTitle}
                      swiperIndex={swiperIndex}
                      english={english}
                    />
                  </div>
                </Div100vh>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Div100vh>
  );
};

export default Projects;
