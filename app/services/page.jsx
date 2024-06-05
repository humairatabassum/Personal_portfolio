"use client"
import {BsArrowDownRight} from "react-icons/bs"
import { motion } from 'framer-motion'
import Link from 'next/link'



const services = [
  {
    num: "01",
    title: "web development",
    description: "lorem ipsum dolor alt mest fhgjtol dolr soov",
    href: ""
  },
  {
    num: "02",
    title: "web development",
    description: "lorem ipsum dolor alt mest fhgjtol dolr soov",
    href: ""
  },
  {
    num: "03",
    title: "web development",
    description: "lorem ipsum dolor alt mest fhgjtol dolr soov",
    href: ""
  },
  {
    num: "04",
    title: "web development",
    description: "lorem ipsum dolor alt mest fhgjtol dolr soov",
    href: " "
  },
]

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-22 xl:py-0'>
    <div className='container mx-auto'>
      <motion.div initial={{ opacity: 0 }} animate={{
        opacity: 1,
        transition:{ delay:2.4, duration:0.4, ease:'easeIn'},
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((service, index) => {
          return (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              <div>
                <div>{service.num}</div>
                <Link href={service.href}>
                  <BsArrowDownRight />
                </Link>
              </div>

              <h2>{service.title}</h2>
              
              <p>{ service.description}</p>
            </div>
          )
        })}

      </motion.div>
    </div>
  </section>)
}

export default Services