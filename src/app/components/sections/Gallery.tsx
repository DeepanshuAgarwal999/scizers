import Image from 'next/image'
import React from 'react'

const Gallery = () => {
    return (
        <div className='px-4 sm:px-10 md:px-36'>
            <Image src='./images/swimmingpool.svg' alt="" height={1600} width={1600} />
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4 mb-12 justify-items-center'>

                <Image src={`./images/p1.svg`} alt='gallery' height={200} width={350} />
                <Image src={`./images/p2.svg`} alt='gallery' height={200} width={350} />
                <Image src={`./images/p3.svg`} alt='gallery' height={200} width={350} />
                <Image src={`./images/p4.svg`} alt='gallery' height={200} width={350} />
            </div>
        </div>
    )
}

export default Gallery