import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TestimonialCard from './testimonialCard';
import TestimonialArray from '@/app/data/testimonials';

const Testimonials = () => {
    return (
        <Swiper
        className="w-full h-max overflow-visible md:h-[400px]"
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                
                    {TestimonialArray.map(testimonial => <SwiperSlide key={testimonial.id} ><TestimonialCard 
                        id={testimonial.id}
                        message={testimonial.message}
                        client={testimonial.client}
                        role={testimonial.role}
                        website={testimonial.website}
                        company={testimonial?.company}
                    />
                    </SwiperSlide>
                )}
                
        </Swiper>
    )
}

export default Testimonials;