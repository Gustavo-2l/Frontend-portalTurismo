import React from "react";
import CardService from "./cardService";
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

import canyon from "../assets/imagens/canyon.png"
import muralha from "../assets/imagens/muralha.jpg"
import noronha from "../assets/imagens/noronha.jpg"
import paris from "../assets/imagens/paris.jpg"
import torredepisa from "../assets/imagens/torredepisa.webp"


const tourist_places = [
    {Image: canyon, title: "Grand Canyon", description: "Enorme deserto repleto de formações rochosas"},
    {Image: muralha, title: "Grande Muralha da China", description: "Grande barreira protetora da China"},
    {Image: noronha, title: "Ilha Fernando de Noronha", description: "Ilha turística"},
    {Image: paris, title: "Torre Effiel", description: "Grande monumento turístico da França"},
    {Image: torredepisa, title: "Torre de Pisa", description: "Imensa torre da Itália que parece prestes a cair"},
]
const Carousel = () =>{

    return(
        <>
        <div className=" relative z-10 w-full">
            <h1 className=" text-3xl font-bold text-center mt-32 text-black drop-shadow-lg">
                Pontos turísticos locais mais visitados
            </h1>
            <div>
                {tourist_places.length < 3 ? (
                    <Swiper
                        slidePerView="auto"
                        spaceBetween={20}
                        loop={true}
                        breakpoints={{
                            640:{
                                slidePerView:2,
                                spaceBetween:20
                            },
                            1024:{
                                slidePerView:3,
                                spaceBetween:30
                            }
                        }}>
                            {tourist_places.map((place, index)=>(
                                <SwiperSlide key={index}>
                                    <CardService
                                     img = {place.Image}
                                     alt = {place.description}
                                     titulo = {place.title}
                                     descricao = {place.description}
                                     link="#"
                                     botao="Saiba Mais" 
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                ):(
                    <Swiper
                    slidePerView="auto"
                    spaceBetween={20}
                    loop={true}
                    breakpoints={{
                        640:{
                            slidePerView:3,
                            spaceBetween:20
                        },
                        1024:{
                            slidePerView:2,
                            spaceBetween:30
                        }
                    }}>
                        {tourist_places.map((place, index)=>(
                            <SwiperSlide key={index}>
                                <CardService
                                 img = {place.Image}
                                 alt = {place.description}
                                 titulo = {place.title}
                                 descricao = {place.description}
                                 link="#"
                                 botao="Saiba Mais" 
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    
                )}
            </div>
        </div>
        </>
    )
}

export default Carousel