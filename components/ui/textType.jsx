'use client'
import { TypeAnimation } from 'react-type-animation';

const TextType = () => {
    return (
        <TypeAnimation
            sequence={[
                 // wait 1s before replacing "Mice" with "Hamsters"
                'Web Developer...',
                1500,
                'Designer...',
                1500,
                'Programmer...',
                1500
            ]}
            speed={50}
            className='text-[2rem] lg:text-[3rem] text-purple-200 font-bold uppercase'
            repeat={Infinity}
        />
    );
};

export default TextType;