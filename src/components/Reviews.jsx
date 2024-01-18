
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { getText } from '../locales';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Reviews = () => {
    return (
        <div className='Reviews'>
            <div className="row justify-content-center">
                <div className="col-md-3 col-10">
                    <div className="wrap">
                        <h5>{getText("reyting")} 4.9</h5>
                        <div className="d-flex justify-content-center">
                            <img src="img/star.png" alt="" />

                        </div>
                        <p>{getText("reytingP")}</p>
                    </div>
                </div>
                <div className="col-md-3 col-11">
                    <div className="wrap">
                        <h5>98%</h5>
                        <h6>{getText("rek")}</h6>
                        <div className="progress-bar">
                            <div className="bar">
                                <div className="progress"></div>
                            </div>
                            <div className="bar">
                                <div className="progress"></div>
                            </div>
                            <div className="bar">
                                <div className="progress"></div>
                            </div>
                            <div className="bar">
                                <div className="progress"></div>
                            </div>
                            <div className="bar">
                                <div className="progress"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="titles text-center">
                <h2>{getText("clientsreviews")}</h2>
            </div>
            <div className="container">
                <Swiper
                    loop={true}
                    slidesPerView={3}
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
                        "@1": {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        "@2": {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="card">
                            <div className="name">
                                <h4>{getText("reviewT1")}</h4>
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                            </div>
                            <p>{getText("reviewP1")}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="name">
                                <h4>{getText("reviewT2")}</h4>
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon className='chala' icon={faStar} />
                                </span>
                            </div>
                            <p>{getText("reviewP2")}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="name">
                                <h4>{getText("reviewT3")}</h4>
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon className='chala' icon={faStar} />
                                </span>
                            </div>
                            <p>{getText("reviewP3")}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="name">
                                <h4>{getText("reviewT4")}</h4>
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                            </div>
                            <p>{getText("reviewP4")}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="name">
                                <h4>{getText("reviewT5")}</h4>
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon className='chala' icon={faStar} />
                                    <FontAwesomeIcon className='chala' icon={faStar} />
                                </span>
                            </div>
                            <p>{getText("reviewP5")}</p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            {/* <div className="myBtn">
                <a href="tel:+998930028858">{getText("leavereview")}</a>
            </div> */}
        </div>
    )
}

export default Reviews