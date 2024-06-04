'use client'

import { motion } from "framer-motion"
import Image from "next/image"


export const Photo = () => {
    return (
        <div className="w-full h-fyll relative">
            <motion.div initial={{opacity:0}}
                animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.4, ease: "easeIn"}}}>
                
                
                <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeInOut" } }} className="w-[265px] h-[265px] 
                xl:w-[470px] xl:h-[470px] mix-blend-lighten absolute translate-y-3 translate-x-4">
                    
                    <Image src="/assets/resume/imgDp1.png"
                        priority quality={100}
                        fill
                        alt=""
                        className="object-contain"
                    />
                </motion.div>

                <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
                    viewBox="0 0 506 506"
                    fill="transparent">
                    
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#a855f7"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [180, 360],
                            
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            repeatType:"reverse"
                        }}
                    />
                    

                </motion.svg>
            </motion.div>
        </div>
    )
}
