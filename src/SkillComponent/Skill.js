import React from 'react'
import './Skill.css'
import image from '../Assets/Img/skill.png';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function Skill() {
  return (
    <div className='skill'>
      <div className='skill_left'>
        <img src={image}></img>
      </div>
      <div className='skill_right'>
        <h1>Skillsets</h1>
        <div className='myskill_container'>
          <h3>React Js</h3>
          <div>
            <div>
              <Box >
                <LinearProgress variant="determinate" value={'90'}/>
              </Box>
            </div>
          </div>
        </div>
        <div className='myskill_container'>
          <h3>HTML</h3>
          <div>
            <div>
              <Box >
                <LinearProgress variant="determinate" value={'95'}/>
              </Box>
            </div>
          </div>
        </div>
        <div className='myskill_container'>
          <h3>CSS</h3>
          <div>
            <div>
              <Box >
                <LinearProgress variant="determinate" value={'90'}/>
              </Box>
            </div>
          </div>
        </div>
        <div className='myskill_container'>
          <h3>JavaScript</h3>
          <div>
            <div>
              <Box >
                <LinearProgress variant="determinate" value={'75'}/>
              </Box>
            </div>
          </div>
        </div>
        <div className='myskill_container'>
          <h3>Php</h3>
          <div>
            <div>
              <Box >
                <LinearProgress variant="determinate" value={'70'}/>
              </Box>
            </div>
          </div>
        </div>
        <div className='myskill_container'>
          <h3>Mysql</h3>
          <div>
            <div>
              <Box >
                <LinearProgress variant="determinate" value={'75'}/>
              </Box>
            </div>
          </div>
        </div>
        <div className='myskill_container'>
          <h3>Outsystems</h3>
          <div>
            <div>
              <Box >
                <LinearProgress variant="determinate" value={'70'} />
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill
