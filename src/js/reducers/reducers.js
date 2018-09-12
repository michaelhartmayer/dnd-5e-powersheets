import { combineReducers } from 'redux'

import characterSheet from './characterSheet/reducer'
import player from './player/reducer'

export default combineReducers({
  characterSheet,
  player
})