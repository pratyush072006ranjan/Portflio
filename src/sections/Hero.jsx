import React from 'react'
import { words } from '../constants/index'
import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'
import AnimatedCounter from '../components/AnimatedCounter'


const Hero = () => {
  return (
    <div>
      <section id="hero" className='relative overflow-hidden'>
       
        <div className='absolute top-0 left-0 z-10'>
            
            <img src="/images/bg.png" alt="background" />
        </div>

        <div className='hero-layout'>
             
            {/* Left: Hero Content */}
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5 -translate-x-4'>
                <div className='flex flex-col gap-7'>
                    <div className="hero-text">
                        <h1>
                            Innovating
                            <span className='slide'>
                                <span className='wrapper'>
                                    {words.map((word)=>(
                                        <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                                            <img src={word.imgPath} alt={word.text} className='xl:size-12 md:size-10 size-7 md:pd-2 p-1 rounded-full bg-white-50' />
                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                            </h1>
                        <h1>into Real-World Projects</h1>
                        <h1>Using Passion Driven Skills</h1>
                    </div>
                    <p className='text-white-50 md:text-xl  relative z-10 pointer-events-none -translate-x-7.5'>
                        Hi, I'm Pratyush Ranjan.<br/>I'm an aspiring Software Developer and a pre-final-year engineering <br /> student at Guru Ghasidas Vishwavidyalaya, passionate about <br /> building impactful digital solutions and exploring emerging technologies.
                    </p>
                   
                    <Button
                        className='md:w-60 md:h-16 w-50 h-12 -translate-x-7.5'
                        id='button'
                        text='See my Work'
                    />

                </div>
            </header>
            {/* Right: 3D Model*/}
            <figure >
                <div className='hero-3d-layout '>
                   <img src="./images/back2.png" alt=""    className="absolute -z-10 w-210 h-160 my-5 translate-x-50  opacity-90" />
                    <HeroExperience/>
                </div>
            </figure>
        </div>
        <AnimatedCounter/>
      </section>
    </div>
  )
}

export default Hero
