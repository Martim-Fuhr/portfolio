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
      image: IMAGES.VANS_HOVER,
      title: 'VANS: Adição do Hover com Imagem em Vans',
      type: 'Frontend',
      description:
        'Adicionado o Hover nas imagens na Página de Produtos da Marca VANS. Sendo possivel vizualizar mais fotos do mesmo produto.',
    },
    {
      id: '2',
      image: IMAGES.ZZMALL_ZZPAY,
      title: 'ZZMALL: Criação do MVP do ZZPAY',
      type: 'Frontend',
      description:
        'Criação do ZZPAY, programa de cashback da Arezzo&Co. Onde uma compra no ZZMall gera saldo para ser utulizado em outras futuras compras.',
    },
    {
      id: '3',
      image: IMAGES.SMS_DASHBOARD,
      title: 'SMSFunnel: Apresentação de SMS enviados e Data-Picker',
      type: 'Fullstack',
      description:
        'Adição de um DATA-PICKER no site do SMSFunnel, sendo possível vizualizar todos SMS enviados no período desejado. Além de melhorias da forma de trazer as informações.',
    },
    {
      id: '4',
      image: IMAGES.ACCOUNT_CONFIRMATION,
      title: 'SMSFunnel: Confirmação de Conta via SMS',
      type: 'Fullstack',
      description:
        'Adição do sistema de Confirmação de Conta via SMS. Na criação da conta no SMSFunnel, será enviado um SMS ao telefone do cliente para confirmar a criação da mesma.',
    },
    {
      id: '5',
      image: IMAGES.AB_BIRMAN,
      title: 'Alexandre Birman: Adição do Hover com Imagem em AB',
      type: 'Frontend',
      description:
        'Adicionado o Hover nas imagens na Página de Produtos da Marca ALEXANDRE BIRMAN. Sendo possivel vizualizar mais fotos do mesmo produto.',
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
            120: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1.4,
              spaceBetween: 48,
            },
            1366: {
              slidesPerView: 1.6,
              spaceBetween: 48,
            },
          }}
          className="text-white"
        >
          {dataImages.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="slide-item">
                <img src={item.image} className="slide-image" />
                <div className="flex">
                  <p className="font-bold mt-1">{item.title}</p>
                  <span
                    className={`ml-4 my-1 badge ${
                      item.type === 'Frontend' ? 'Frontend' : 'Fullstack'
                    }`}
                  >
                    {item.type}
                  </span>
                </div>
                <p className="text-slate-300 text-sm">{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselSection>
    </>
  )
}
