import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TestimonialCard from './testimonialCard';
import TestimonialArray from '@/app/data/testimonials';

const Testimonials = () => {
    return (
        <Swiper
        className="w-full h-max overflow-visible"
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
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