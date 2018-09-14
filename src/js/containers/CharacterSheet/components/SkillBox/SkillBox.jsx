import React from 'react'
import SkillBoxItem from './../SkillBoxItem'
import { SKILLS } from '../../constants.js'

class SkillBox extends React.Component {
  static ORDER_BY_AZ   = 'ORDER_BY_AZ'
  static ORDER_BY_ZA   = 'ORDER_BY_ZA'
  static ORDER_BY_STAT = 'ORDER_BY_STAT'

  state = {
    sortOrder: SkillBox.ORDER_BY_AZ,
    skills: SKILLS
  }

  sortAZ = _ => this.setState({ sortOrder: SkillBox.ORDER_BY_AZ   })
  sortZA = _ => this.setState({ sortOrder: SkillBox.ORDER_BY_ZA   })
  sortST = _ => this.setState({ sortOrder: SkillBox.ORDER_BY_STAT })

  handleToggleProficiency = skill => {
    let skills = [...this.state.skills]

    skills = skills.map(s => {
      if (s.name === skill.name) s.proficient = !s.proficient
      return s
    })

    this.setState({ skills })
  }

  get sortedSkills () {
    const { sortOrder } = this.state

    switch (sortOrder) {
      case SkillBox.ORDER_BY_STAT:
        return SKILLS.sort((a, b) => a.stat > b.stat)
        break

      case SkillBox.ORDER_BY_ZA:
        return SKILLS.sort((a, b) => a.name < b.name)
        break
      
      case SkillBox.ORDER_BY_AZ:
      default:
        return SKILLS.sort((a, b) => a.name > b.name)
        break
    }
  }

  render () {
    return (
      <div className='skill-box type-title'>
        {/* Skills */}
        {this.state.skills.map((skill, i) => {
          return <SkillBoxItem skill={this.sortedSkills} key={i} onToggle={() => this.handleToggleProficiency(skill)} />
        })}

        <button onClick={this.sortAZ}>A-Z</button>
        <button onClick={this.sortZA}>Z-A</button>
        <button onClick={this.sortST}>*</button>
      </div>
    )
  }
}

export default SkillBox