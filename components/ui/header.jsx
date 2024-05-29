import React from 'react';
import Link from 'next/link';
import { Button } from './button';
import Nav from './nav';

const Header=() =>{
    return (
        <header className='py-8 xl:py-12 text-white'>
            <div className='container mx-auto'>
                <Link href='\'>
                    <h1 className='text-2xl font-semibold'>
                        Humaira<span className='text-purple-500'>.</span>
                    </h1>
                </Link>

                <div className='hidden xl:flex'>
                    <Nav/>
                </div>
            </div>
        </header>
    )
}

export default Header;