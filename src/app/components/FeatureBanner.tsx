import Image from 'next/image'
import React from 'react'

const data = [
    {
        imageUrl: "./images/discount.svg",
        title: "BOOK WITH",
        content: "Only 20%"
    },
    {
        imageUrl: "./images/planimg.svg",
        title: "PAYMENT PLAN",
        content: "Easy 70/30"
    }, {
        imageUrl: "./images/handoverimg.svg",
        title: "HANDOVER ON",
        content: "Q2 2027"
    }, {
        imageUrl: "./images/sqm.svg",
        title: "AREA STARTS FROM",
        content: "700 sqmt"
    }
]

const FeatureBanner = () => {
    return (
        <div className='bg-[#F4F9FF] py-6 px-4 sm:px36 md:px-44 mx-auto grid grid-cols-2 lg:grid-cols-4 justify-between items-center gap-8'>
            {
                data.map((item) => (
                    <div className='text-[#00357B] flex flex-col gap-1 justify-center items-center' key={item.title}>
                        <Image src={item.imageUrl} alt={item.title} height={40} width={40} />
                        <h1 className='text-sm'>{item.title}</h1>
                        <p className='text-3xl font-semibold uppercase max-sm:text-2xl'>{item.content}</p>
                        <Image src={'./images/borderdesign.svg'} alt='' width={70} height={10} className='pt-1'/>
                    </div>
                ))
            }
        </div>
    )
}

export default FeatureBanner