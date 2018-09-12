import * as types from './constants.js'

const initialState = {
  character: {
    name: '',
    age:  '',
    experience: 0,
    class: '',
    alignment: '',
    background: ''
  },

  stats: {
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10
  },

  skills: {
    acrobatics: {
      proficient: false,
      value: 0
    },

    animal_handling: {
      proficient: false,
      value: 0
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_NAME: {
      let newState = Object.assign({}, state)
      newState.character.name = action.name
      return newState
    }

    default:
      return state
  }
}

export { initialState }
export default reducer