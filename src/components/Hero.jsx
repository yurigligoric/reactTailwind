import React from 'react'
import { findRenderedComponentWithType } from 'react-dom/test-utils'
import Godfather from '../images/Godfather.png'
import {AiOutlineTwitter, AiOutlineYoutube, AiOutlineFacebook} from 'react-icons/ai'

const Hero = () => {
  return (
    <section className='bg-primary px-5 text-white py-32'>
        <div className='container mx-auto grid md:grid-cols-2 item-center justify-center md:justify-between'>
            <div className='hero-info pb-5 md:pb-0'>
                <h1 className='text-4x1 lg:text-6x1'>
                    Hi!, <br /> I am <span className='text-accent'>a</span>mrin<br />
                    Fullstack developer
                </h1>
                <p className='py-5'>
                    I am a C# ASP.net, react, tailwind and mui developer
                </p>

                <a href='/#projects' className='btn bg-accent border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent'>
                    See projects

                </a>
            </div>
            <div className='hero-img'>
                <img src={Godfather} alt="Godfather" className='lgv-[80%] ml-auto' />
                

            </div>

        </div>
    </section>
  )
}

export default Hero
