import Image from 'next/image'
import React from 'react'
import Button from '../inputs/Button'

const Navbar = () => {
    return (
        <><nav className=' px-4 sm:px-10 md:px-36 flex items-center justify-between w-full'>
            <Image src={'./images/logo.svg'} alt='' height={150} width={150} />
            <Button className=' text-primary border-primary border-2 text-lg tracking-tighter font-extrabold'>ENQUIRE NOW</Button>
        </nav>
        </>
    )
}

export default Navbar