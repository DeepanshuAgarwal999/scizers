"use client"

import Image from 'next/image'
import React from 'react'
import Button from '../inputs/Button'
import Card from '../Card'


const data = [
    {
        imageUrl: "./images/c1.svg",
        title: "Floating Pools",
    },
    {
        imageUrl: "./images/c2.svg",
        title: "Spacious Cabins Like Rooms",
    }, {
        imageUrl: "./images/c3.svg",
        title: "Sea Facing Swimming Pools",
    }, {
        imageUrl: "./images/c4.svg",
        title: "Gymnasium & FItness",
    }
]

const HarbourLight = () => {
    return (
        <div className='px-4 sm:px-10 md:px-36 py-14'>
            <Image src={'./images/tagline.svg'} alt='' height={100} width={200} className='mx-auto' />
            <h1 className='uppercase text-3xl md:text-3xl lg:text-4xl font-bold text-[#00357b] text-center pb-4 pt-8'>Features & Amenities</h1>
            <p className='text-sm font-normal text-[#343434] text-center px-4 sm:px-20 lg:px-40'>Harbour Lights beautifully honours maritime voyages while embracing an opulent seafront lifestyle. Its maritime-inspired amenities provide an unmatched seaside experience, offering a life of tranquility and bliss.</p>
            {/* card */}
            <div className='grid sm:grid-cols-2 xl:grid-cols-4 mt-40 gap-x-24 gap-y-40  place-content-center justify-items-center mx-auto'>
                {
                    data.map((item, i) => (
                        <Card imgUrl={item.imageUrl} title={item.title} key={i} />
                    ))
                }
            </div>
            <p className='text-[10px] text-end text-[#686868] font-light tracking-wide mt-10'>*T&Cs apply | ** Based on similar branded projects in the last 2 years. Source 1 | Source 2</p>
            <div className='flex gap-2 justify-end mt-12'>
                <Button className='text-white bg-primary-100 h-14 hover:bg-primary-100/90 duration-300 border-primary-100'>EXTERIOR</Button>

                <Button className='text-primary-100 bg-white border h-14 border-primary-100 duration-300'>INTERIORS</Button>
            </div>
        </div>
    )
}

export default HarbourLight