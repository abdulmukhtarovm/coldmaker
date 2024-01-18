import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { getText } from "../locales";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Team = () => {
  return (
    <div className="Team" id="team">
      <div className="titles text-center">
        <h2>{getText("allWorkers")}</h2>
      </div>
      <div className="container">
        <Swiper
          loop={true}
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.25": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@2": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card">
              <div className="img">
                <img className="w-100" src="img/worker1.png" alt="" />
              </div>
              <div className="info">
                <div className="names">
                  <h4>{getText("worker1")}</h4>
                  <span>
                    <FontAwesomeIcon icon={faStar} />
                    4.8
                  </span>
                </div>
                <p>{getText("worker1P")}</p>
                <h6>{getText("opit")}</h6>
                <p>8 {getText("let")}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="img">
                <img className="w-100" src="img/worker1.png" alt="" />
              </div>
              <div className="info">
                <div className="names">
                  <h4>{getText("worker2")}</h4>
                  <span>
                    <FontAwesomeIcon icon={faStar} />5
                  </span>
                </div>
                <p>{getText("worker2P")}</p>
                <h6>{getText("opit")}</h6>
                <p>36 {getText("let")}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="img">
                <img className="w-100" src="img/worker1.png" alt="" />
              </div>
              <div className="info">
                <div className="names">
                  <h4>{getText("worker3")}</h4>
                  <span>
                    <FontAwesomeIcon icon={faStar} />
                    4.8
                  </span>
                </div>
                <p>{getText("worker3P")}</p>
                <h6>{getText("opit")}</h6>
                <p>8 {getText("let")}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
