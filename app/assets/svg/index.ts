import home from './Home.tsx'
import leaderboard from './Leaderboard.tsx'
import settings from './Settings.tsx'
import home_1 from './Home_1.tsx'
import home_2 from './Home_2.tsx'
import home_3 from './Home_3.tsx'
import brand from './Brand.tsx'
import present from './Presemt.tsx'
import nike from './nike.tsx'
import macdonalds from './macdonalds.tsx'
import lego from './Lego.tsx'
import star from './Star.tsx'
import bell from './Bell.tsx'
import lamp from './Lamp.tsx'

export const icons = {
  home,
  leaderboard,
  settings,
  home_1,
  home_2,
  home_3,
  brand,
  present,
  nike,
  macdonalds,
  lego,
  star,
  bell,
  lamp,
}

export type IconTypes = keyof typeof icons
