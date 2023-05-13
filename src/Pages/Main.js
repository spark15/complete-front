import React from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../Component/Navbar';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";


let count = 0;
function Main(props){
    const location = useLocation();
    const items = [
        { src: "dog.jpeg" },
        { src: "dog1.jpeg" },
        { src: "dog2.jpeg" },
      ];
    
    if(count === 0){
        count= count+1;
        return(
            <div>
                <Nav profile={props.profile} setProfile = {props.setProfile} />
                <div className='adv'>
                    배너있을곳
                </div>
                <div className='blog'>
                    블로그 정보
                </div>
            </div>
        )
    }
    else{
        return(
            <div>
                <Nav  profile={props.profile} setProfile = {props.setProfile}/>
                <>
      <Swiper
        effect={"fade"}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, EffectFade, Pagination,Autoplay]}
        className="mySwiper"
        loop={true}
      >
        {items.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <img className = "image"src={item.src} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>

            </div>
        )
    }
}
export default Main;