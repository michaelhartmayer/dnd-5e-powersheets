import * as types from './constants.js'

const setStrength = value => ({
  type: types.SET_STAT,
  stat: 'str',
  value
})

const setName = name => ({
  type: types.SET_NAME,
  name
})

console.log(types)

export default {
  setStrength,
  setName
}