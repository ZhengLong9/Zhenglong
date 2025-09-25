import React from 'react'
import SkillCard from './SkillCard';

const skillItem = [
  {
    imgSrc: 'images/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: 'images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: 'images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: 'images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: 'images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: 'images/mysql.svg',
    label: 'MYSQL',
    desc: 'Database'
  },
  {
    imgSrc: 'images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: 'images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
];

const Skill = () => {
  return (
    <section className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
                Tools that I use
            </h2>
            <p className='text-zinc-400 mt-3 mb-8 reveal-up'>Here's a list of tools and technologies I've learnt so far on my journey of becoming a Web Developer.</p>
            <div className='grid gap-3 grid-cols-[repeat(auto-fill, _minmax(250px,_1fr))]'>
                {skillItem.map(({imgSrc, label, desc}, key) => <SkillCard imgSrc={imgSrc} label={label} desc={desc} key={key} classes="reveal-up"></SkillCard>)}
            </div>
        </div>
    </section>
  )
}

export default Skill