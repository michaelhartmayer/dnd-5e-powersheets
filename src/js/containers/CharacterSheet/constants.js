const STATS = {
  STR: 'STR',
  INT: 'INT',
  DEX: 'DEX',
  CON: 'CON',
  CHA: 'CHA',
  WIS: 'WIS'
}

const SKILLS = [
  // str
  { name: 'Athletics', stat: STATS.STR, proficient: false },

  // dex
  { name: 'Acrobatics', stat: STATS.DEX, proficient: false },
  { name: 'Sleight of Hand', stat: STATS.DEX, proficient: false },
  { name: 'Stealth', stat: STATS.DEX, proficient: false },

  // int
  { name: 'Arcana', stat: STATS.INT, proficient: false },
  { name: 'History', stat: STATS.INT, proficient: false },
  { name: 'Investigation', stat: STATS.INT, proficient: false },
  { name: 'Nature', stat: STATS.INT, proficient: false },
  { name: 'Religion', stat: STATS.INT, proficient: false },

  // wis
  { name: 'Animal Handling', stat: STATS.WIS, proficient: false },
  { name: 'Insight', stat: STATS.WIS, proficient: false },
  { name: 'Medicine', stat: STATS.WIS, proficient: false },
  { name: 'Perception', stat: STATS.WIS, proficient: false },
  { name: 'Survival', stat: STATS.WIS, proficient: false },

  // cha
  { name: 'Deception', stat: STATS.CHA, proficient: false },
  { name: 'Intimidation', stat: STATS.CHA, proficient: false },
  { name: 'Performance', stat: STATS.CHA, proficient: false },
  { name: 'Persuasion', stat: STATS.CHA, proficient: false }
]

export {
  STATS, SKILLS
}