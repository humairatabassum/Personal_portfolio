'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';


const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
]

const MobileNav = () => {

    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-purple-400' />
            </SheetTrigger>

            <SheetContent className='felx flex-col'>
                <div className='border-b-2 border-purple-400 mb-10 mt-7'> <Link href='/'>
                    <h1 className='text-2xl font-semibold'>
                        HT<span className='text-purple-400'>.</span>
                    </h1>
                </Link></div>
                <nav className='flex flex-col items-start gap-10'>
                    {links.map((link, index) => {
                        return <Link href={link.path} key={index}
                            className={`${link.path === pathname &&
                                " text-center text-purple-400 border-b-2 border-purple-400"} capitalize font-medium hover:text-purple-400 transition-all`}>
                            {link.name}
                        </Link>
                    })}</nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav