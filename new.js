import { GUI } from 'https://cdn.skypack.dev/dat.gui'

const CONFIG = {
  gradient: true,
  animated: true,
  highlight: 2,
  spread: 1,
  primary: '#ffffff',
  secondary: '#606060',
}

const CTRL = new GUI()

const UPDATE = () => {
  for (const key of Object.keys(CONFIG)) {
    document.documentElement.style.setProperty(`--${key}`, CONFIG[key])
  }
  document.documentElement.setAttribute('data-gradient', CONFIG.gradient)
  document.documentElement.setAttribute('data-animate', CONFIG.animated)
}

const HIGHLIGHT_ONE = CTRL.addFolder('Highlight One')
HIGHLIGHT_ONE.add(CONFIG, 'highlight', 0, 5, 1).name('Spread').onChange(UPDATE)
HIGHLIGHT_ONE.addColor(CONFIG, 'primary').name('Color').onChange(UPDATE)
HIGHLIGHT_ONE.add(CONFIG, 'gradient').name('Use gradient?').onChange(UPDATE)
HIGHLIGHT_ONE.add(CONFIG, 'animated').name('Animate gradient?').onChange(UPDATE)

const HIGHLIGHT_TWO = CTRL.addFolder('Highlight Two')
HIGHLIGHT_TWO.add(CONFIG, 'spread', 0, 5, 1).name('Spread').onChange(UPDATE)
HIGHLIGHT_TWO.addColor(CONFIG, 'secondary').name('Color').onChange(UPDATE)

UPDATE()