'use client'

import { IMAGES } from '@/images'
import Image from 'next/image'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CarouselSection, H2Title } from './styles'

export function Carousel() {
  const dataImages = [
    {
      id: '0',
      image: IMAGES.KEDU_MULTI,
      title: 'KEDU: Criação do APP KEDU MULTI',
      type: 'Fullstack',
      description:
        'Criação do APP KEDU MULTI, um app onde os Responsáveis Finaneiros podem acompanhar titulos e matrículas de seus dependentes.',
    },
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
      image: IMAGES.MATRICULAS,
      title: 'KEDU: Fatoração do módulo de Matrículas',
      type: 'Fullstack',
      description:
        'Fatoração/Criação de um módulo de matrículas no painel Administrador, permitindo seguir um fluxo mais adequado de matrículas no sistema.',
    },
    {
      id: '3',
      image: IMAGES.ZZMALL_ZZPAY,
      title: 'ZZMALL: Criação do MVP do ZZPAY',
      type: 'Frontend',
      description:
        'Criação do ZZPAY, programa de cashback da Arezzo&Co. Onde uma compra no ZZMall gera saldo para ser utulizado em outras futuras compras.',
    },
    {
      id: '4',
      image: IMAGES.SMS_DASHBOARD,
      title: 'SMSFunnel: Criação completa do Dashboard',
      type: 'Fullstack',
      description:
        'Adição de um dashboard completo no site do SMSFunnel, sendo possível vizualizar todos SMS enviados no período desejado além de outras métricas importantes.',
    },
    {
      id: '5',
      image: IMAGES.ACCOUNT_CONFIRMATION,
      title: 'SMSFunnel: Confirmação de Conta via SMS',
      type: 'Fullstack',
      description:
        'Criação do sistema de Confirmação de Conta via SMS na criação da conta no SMSFunnel.',
    },
    {
      id: '6',
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
        <H2Title id="entregas">Principais Entregas:</H2Title>
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
          className="text-[var(--text)]"
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
                <p className="text-sm">{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselSection>
    </>
  )
}

export default Carousel
