import React from 'react';
import Link from 'next/link';
import { Button } from './button';

const Nav=() =>{
    return (
        <header className='py-8 xl:py-12 text-white'>
            <div className='container mx-auto'>
                {/* <Link href='\'>
                    <h1 className='text-2xl font-semibold'>
                        Mobile nav<span className='text-purple-500'>.</span>
                    </h1>
                </Link> */}
                Mobile
            </div>
        </header>
    )
}

export default Nav