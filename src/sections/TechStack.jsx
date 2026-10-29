import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons } from '../constants'
import { div } from 'three/tsl'
import TechIconCardExperience from '../components/Models/TechLogos/TechIconCardExperience'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const TechStack = () => {
    useGSAP(()=>{
        gsap.fromTo('.tech-card',{y:50,opacity:0},{
            y:0,
            opacity:1,
            duration:1,
            ease:'power2.inOut',
            stagger:0.2,
            scrollTrigger:{
                trigger:'#skills',
                start:'top center'
            }
        })
    })
  return (
    <div id='skills' className='flex-center section-padding '> 
      <div>
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        <div className='tech-grid'>
            {techStackIcons.map((techStackIcon)=>(
                <div key={techStackIcon.name}  className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                    <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIconCardExperience model={techStackIcon}/>
                    </div>
                         <div className="padding-x w-full">
                            {techStackIcon.name}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack
