'use client'

import { IMAGES } from '@/images'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CarouselSection, H2Title } from './styles'
import 'swiper/css'

export function Carousel() {
  const dataImages = [
    {
      id: '1',
      image: '/images/hover-images-vans.gif',
      title: 'VANS: Adição do Hover com Imagem em Vans',
      description: '',
    },
    {
      id: '2',
      image: '/images/Screenshot_7.png',
      title: 'ZZMALL: Criação do MVP do ZZPAY',
      description: '',
    },
    {
      id: '3',
      image: '/images/new-sms-dashboard.jfif',
      title: 'SMSFunnel: Apresentação de SMS enviados e Data-Picker',
      description: '',
    },
    {
      id: '4',
      image: '/images/Screenshot_8.png',
      title: 'SMSFunnel: Confirmação de Conta via SMS',
      description: '',
    },
    {
      id: '5',
      image: '/images/hover-images-ab.gif',
      title: 'Alexandre Birman: Adição do Hover com Imagem em AB',
      description: '',
    },
  ]
  return (
    <>
      <CarouselSection>
        <H2Title id="deliveries">Main Deliveries:</H2Title>
        <Swiper
          loop={true}
          spaceBetween={50}
          slidesPerView={1.5}
          navigation
          breakpoints={{
            768: {
              slidesPerView: 1.4,
              spaceBetween: 48,
            },
            1520: {
              slidesPerView: 2.6,
              spaceBetween: 48,
            },
          }}
          className="text-white"
        >
          {dataImages.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} className="slide-item" />
              <p>{item.title}</p>
              <p>{item.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselSection>
    </>
  )
}
