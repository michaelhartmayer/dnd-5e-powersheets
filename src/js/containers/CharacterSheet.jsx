import React from 'react'
import './CharacterSheet.styl'
import 'css-loader!bootstrap/dist/css/bootstrap-grid.css'

// const HOC = CharacterName => class HOC extends React.Component {
//   showName = () => {
//     console.log('NAME:', this.props.name)
//   }

//   render () {
//     return <>
//       <CharacterName { ... this.props } onClick={this.showName} />
//     </>
//   }
// }

//@HOC
const CharacterName = ({ name }) => {
  return (
    <div className='character-sheet__character-name type-body'>
      <input type='text' placeholder='Bobby Sanchez' value={name} />
    </div>
  )
}

class CharacterSheet extends React.Component {
  render () {
    return (
      <div className='character-sheet container'>
        <div class='row'>
          <div class='col-md-5'>
            <CharacterName name='Fin' />
          </div>
          <div class='col-md-7'>
            Meta
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterSheet