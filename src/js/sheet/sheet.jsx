import React from 'react'
import { connect } from 'react-redux'
import './sheet.styl'
import actions from '../reducers/characterSheet/actions'

const StatComponent = ({
  statName   = 'Undefined Stat',
  value      = 0, 
  onAdd      = () => {},
  onSubtract = () => {}
}) => {
  return (
    <div className='type-body stat-box'>
      <span className='stat-box--name'>{statName}</span>
      <span className='stat-box--value'>{value}</span>

      <div style={{ display: 'none' }}>
        <button onClick={onAdd}>+</button>
        <button onClick={onSubtract}>-</button>
      </div>
    </div>
  )
}

const SkillComponent = ({
  skillName  = 'Undefined Skill',
  statValue  = 0,
  proficient = false,
  onAdd      = () => {},
  onSubtract = () => {}
}) => {
  return (
    <div className='type-body'>
      <span style={{ background: 'red' }}>&nbsp;</span>
      <span>{skillName}</span>: {statValue}
      <button onClick={onAdd}>+</button>
      <button onClick={onSubtract}>-</button>
    </div>
  )
}

class Sheet extends React.Component {
  setName () {
    let name = prompt("Character Name")

    if (!name) return
    this.props.setName(name)
  }

  render () {
    const { characterSheet }               = this.props
    const { stats, skills, character }     = characterSheet
    const { str, dex, con, int, wis, cha } = stats;

    return (
      <div className='sheet'>
        Character Name: {character.name} <button onClick={this.setName.bind(this)}>!</button>
        
        <h2>Stats</h2>
        <StatComponent statName='Strength'     value={str} onAdd={null} />
        <StatComponent statName='Dexterity'    value={dex} />
        <StatComponent statName='Constitution' value={con} />
        <StatComponent statName='Intelligence' value={int} />
        <StatComponent statName='Wisdom'       value={wis} />
        <StatComponent statName='Charisma'     value={cha} />

        <h2>Skills</h2>
        <SkillComponent 
          skillName  = 'Acrobatics' 
          proficient = {skills.acrobatics.proficient} 
          value      = {skills.acrobatics.value}
        />
      </div>
    )
  }
}

// state->props
const mapStateToProps = ({ characterSheet }) => ({ characterSheet })

// dispatch->props
const mapDispatchToProps = (dispatch, ownProps) => ({
  setName: name => dispatch(actions.setName(name))
})

const ConnectedSheet = connect(mapStateToProps, mapDispatchToProps)(Sheet)

export default ConnectedSheet



