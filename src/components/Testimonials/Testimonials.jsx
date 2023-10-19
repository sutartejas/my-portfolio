import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/swapnil-mane-46b705a0',
      name: 'Swapnil Mane',
      role: 'Full Stack Developer',
      test: 'I have worked with Tejas in the same team and he is a great team player. His programming skills are the best. He will probably fit in many companies not only because he is a good team player but also because he has great skills and I know he has a lot of potential to show.'
    },
     {
      id: 2,
      link: 'https://www.linkedin.com/in/sourabh-turekar-2257ab145',
      name: 'Sourabh Turekar',
      role: 'Software Developer at MRO Corp (US Healthcare)',
      test: 'I have worked with Tejas in the same team and he is a great team player. His programming skills are the best. He will probably fit in many companies not only because he is a good team player but also because he has great skills and I know he has a lot of potential to show.'
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/kishorrasure',
      name: 'Kishor Rasure',
      role: 'Full Stack Developer',
      test: 'I have worked with Tejas in the same team and he is a great team player. His programming skills are the best. He will probably fit in many companies not only because he is a good team player but also because he has great skills and I know he has a lot of potential to show.'
    }
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
            <div className="client__avatar">
              <a href={test.link}>
                <BsLinkedin />
              </a>
            </div>
            <h5 className='client__name'>{test.name}</h5>
            <small className="client__review">{test.test}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials