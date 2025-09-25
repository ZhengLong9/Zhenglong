import React from 'react'
import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: '/images/project-1.png',
    title: 'UX Research - JDS Badminton (WIP)',
    tags: ['User Experience'],
    projectLink: 'https://docs.google.com/document/d/1UDpA7b-pvg7R_SFwiqjoS9hD7suid_Gy/edit?usp=sharing&ouid=105729160574253298274&rtpof=true&sd=true'
  },
]

const Work = () => {
  return (
    <section className="section" id='work'>
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          Current Projects
        </h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill, _minmax(200px, _1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes="reveal-up"></ProjectCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work