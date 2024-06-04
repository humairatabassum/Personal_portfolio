import { Photo } from '@/components/Photo'
import Social from '@/components/Social'
import Stats from '@/components/Stats'
import { Button } from '@/components/ui/button'
import TextType from '@/components/ui/textType'
import { FiDownload } from 'react-icons/fi'

const Home = () => {
  return <section>
    <div className='container mx-auto h-full'>
      <div className='flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24'>

        <div className="text-center lg:text-left order-2 lg:order-none">
          <span className='text-xl'>Lorem Heading</span>
          <h1 className='h1 mb-6'>Hello I'm<br />
            <span className="text-purple-400">Lorem ipsum </span>
            <div><TextType /></div>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Laudantium error
            impedit aperiam doloremque non dolorum voluptates provident!
            Cupiditate delectus dignissimos doloribus id tenetur! 
            praesentium enim similique iste solut.</p>

          <div className='flex flex-col items-center lg:flex-row lg:items-baseline justify-start
          
           gap-8'>
           
            <Button variant="outline"
              size="lg"
              classname='uppercase flex items-center justify-center gap-4'>
              <span>Download CV</span>
              <FiDownload className='ml-4 text-xl' />
            </Button>

            <div className='mb-8 xl:mb-0'>
              <Social containerStyles='flex gap-6' iconStayles='w-9 h-9 border border-purple-400 rounded-full
              flex justify-center items-center text-purple-400 text-bas hover:bg-purple-400 hover:text-primary hover:transition-all duration-500'/>
            </div>

          </div>


        </div>

        <div className='order-1 lg:order-none'>
          <Photo/>
        </div>
      </div>

      <Stats/>

    </div>
  </section>
}

export default Home