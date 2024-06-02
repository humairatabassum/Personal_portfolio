import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import Nav from './nav';
import MobileNav from './mobileNav';

const Header=() =>{
    return (
        <header className='py-8 xl:py-12 text-white'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link href='/'>
                    <h1 className='text-3xl font-semibold'>
                        HT<span className='text-purple-500'>.</span>
                    </h1>
                </Link>

                {/* desktop nav  */}
                <div className='hidden lg:flex items-center gap-8'>
                    <Nav/>
                    <Link href='/Contact'>
                        <Button>Hire me</Button>
                    </Link>
                </div>


                {/* mobile dev  */}
                <div className='lg:hidden'>
                   <MobileNav/>
                </div>

            </div>
        </header>
    )
}

export default Header;