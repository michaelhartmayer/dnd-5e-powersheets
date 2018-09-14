import React from 'react'
import SkillBox from './components/SkillBox'

class CharacterSheet extends React.Component {
  render () {
    return (
      <div className='character-sheet container'>
        <div className='row'>

          {/* Left Column */}
          <div className='col'>
            {/* Skills */}
            <div className='row'>
              <SkillBox />
            </div>
          </div>

          {/* Right Column */}
          <div className='col'>

            {/* Meta */}
            <div className='row'>
              Meta
            </div>
            
            {/* ... */}
            <div className='row'>

              {/* Sub Left Column */}
              <div className='col'>
              
                {/* Armor Class / Initiative / Speed */}
                <div className='row'>
                  AC / Initiative / Speed
                </div>

                {/* HP */}
                <div className='row'>
                  HP
                </div>

                {/* Dice and Saves */}
                <div className='row'>
                  Hit Dice / Saves
                </div>

                {/* Weapons */}
                <div className='row'>
                  Weapons
                </div>

                {/* Equipment */}
                <div className='row'>
                  Equipment
                </div>
              </div>
              
              {/* Sub Right Column */}
              <div className='col'>
                
                {/* Personality Traits / Ideals & Bonds / Flaws */}
                <div className='row'>
                  Personality Traits / Ideals & Bonds / Flaws
                </div>

                {/* Features and Traits */}
                <div className='row'>
                  Features and Traits
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterSheet