
import Image from 'next/image'
import React from 'react'

const Card = ({ imgUrl, title }: { imgUrl: string, title: string }) => {
    return (
        <article className='bg-[#FCFCFC] p-4 rounded-xl w-[230px]  shadow-lg relative z-20 hover:scale-110 duration-200 ease-in-out cursor-pointer'>
            <div className=''>
                <Image src={imgUrl} alt='' height={200} width={200} className='rounded-full relative z-30 -mt-28 border-4 border-[#D9D9D98A] ' />
            </div>
            <h1 className='text-primary-100 text-center mt-2 font-semibold'>
                {title}
            </h1>
        </article>
    )
}

export default Card