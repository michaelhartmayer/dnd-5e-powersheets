import React from 'react'
import PropTypes from 'prop-types'

const SkillBoxItem = ({
  skill    = { name: 'Undefined', proficient: false },
  onToggle = _ => {}
}) => {
  let active = skill.proficient 
    ? 'skill-box-item__proficient__active' 
    : ''

  return (
    <div className='skill-box-item'>
      <span className={'skill-box-item__proficient ' + active} onClick={onToggle} />
      <span className='skill-box-item__label'>{skill.name}</span>
      <input className='skill-box-item__points' type='text' />
      <span className='skill-box-item__stat'></span>
    </div>
  )
}

SkillBoxItem.propTypes = {
  skill: PropTypes.object,
  onToggle: PropTypes.func
}

export default SkillBoxItem