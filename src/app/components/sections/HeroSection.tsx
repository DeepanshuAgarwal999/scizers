import Image from 'next/image'
import React from 'react'
import Navbar from '../shared/Navbar'
import Button from '../inputs/Button'
import { FlipLink } from '../animation/FlipLink'

export const HeroSection = () => {
    return (
        <div className='text-lg py-10 lg:h-[calc(100vh-65px)] bg-heroImage  w-full bg-no-repeat bg-center bg-cover '>
            <Navbar />
            <main className='flex flex-col lg:flex-row items-center gap-10 justify-between pt-28 lg:pt-32 px-4 sm:px-10 md:px-36'>
                <div className='text-white uppercase'>
                    <h1 className='space-y-4 uppercase text-3xl md:text-4xl lg:text-4xl 2xl:text-5xl font-bold font-oswald tracking-wider '><span className='flex items-center gap-2'><FlipLink href='#'>Harbour </FlipLink><FlipLink>Lights</FlipLink></span>
                        <span className='flex items-center gap-2'>
                            <FlipLink> De</FlipLink>  <FlipLink href='#' className='text-primary'>  GRESOGONO </FlipLink></span></h1>
                    <p className='pt-5 pb-14 font-bold capitalize tracking-wider text-xl'>1, 2 & 3 Bedrooms Seaside Apartments <br />in Dubai Maritime City</p>
                    <Image src={'./images/herotext.svg'} alt='' width={300} height={100} />
                </div>
                <article className='w-[306px] text-white rounded-xl bg-white/5 uppercase backdrop-blur-md '>
                    <div className='px-6 py-8'>
                        <h3 className='text-[13px] font-extralight tracking-widest '>PRICING STARTS FROM</h3>
                        <h5 className='text-4xl font-extrabold font-oswald'>$ 425,000</h5>
                        <p className='pt-2 pb-6 tracking-tighter font-oswald'>AED 1.3 Million</p>
                        <Button className='font-bold w-full bg-primary text-[13px] border-none text-white tracking-wider'>GET A PRESENTATION</Button>
                    </div>
                    <div className='px-6 py-4 bg-[#98C5E8]/15 backdrop-blur-sm shadow-headerBtnShadow border-t border-black'>
                        <p className='text-xs text-[#98C5E8]'>Get an Expert’s Presentation of Real Estate in Dubai for Life and investment</p>

                    </div>
                </article>

            </main>
        </div>
    )
}


