'use client'

import { motion } from "framer-motion"
import Image from "next/image"


export const Photo = () => {
    return (
        <div className="w-full h-fyll relative">
            <motion.div>
                <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]">
                    <Image src="/assets/resume/imgDp1.png"
                        priority quality={100}
                        fill
                        alt=""
                        className="object-contain"
                    />
                </div>
            </motion.div>
        </div>
    )
}
