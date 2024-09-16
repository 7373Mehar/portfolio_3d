import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>{text}</p>
      <Link to={link} className='neo-brutalism-white neo-btn'>
          {btnText}
          <img src={arrow} className='w-4 h-4 object-contain'/>
      </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5"> Hi, I am <span className='font-semibold'>Mehar</span>👋
    <br/>
    A Software Engineer
    </h1>
  ),
  2: (
      <InfoBox text="Worked with many companies and picked up many skills along the way."
              link="/about"
              btnText="Learn more">
      </InfoBox>
  ),
  3: (
    <InfoBox text="Developed multiple projects over the years. Check them out."
            link="/projects"
            btnText="Visit my portfolio">
    </InfoBox>
),
  4: (
    <InfoBox text="Would you like to talk?"
            link="/contact"
            btnText="Let's connect">
    </InfoBox>
)
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo