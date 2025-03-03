import './style.css'
import { setupNavigation } from './components/navigation'
import { setupHero } from './components/hero'
import { setupFooter } from './components/footer'
import { setupBackground } from './effects/background'

document.addEventListener('DOMContentLoaded', () => {
  // Setup main sections
  setupNavigation()
  setupHero()
  setupFooter()
  
  // Setup background effects
  setupBackground()
  
  // Add Font Awesome for icons
  const fontAwesome = document.createElement('link')
  fontAwesome.rel = 'stylesheet'
  fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
  document.head.appendChild(fontAwesome)
  
  // Add viewport meta tag for proper mobile rendering
  const viewportMeta = document.createElement('meta')
  viewportMeta.name = 'viewport'
  viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
  document.head.appendChild(viewportMeta)
  
  // Add apple-mobile-web-app-capable meta for iOS fullscreen
  const appleMeta = document.createElement('meta')
  appleMeta.name = 'apple-mobile-web-app-capable'
  appleMeta.content = 'yes'
  document.head.appendChild(appleMeta)
  
  // Add theme-color meta for browser UI
  const themeMeta = document.createElement('meta')
  themeMeta.name = 'theme-color'
  themeMeta.content = '#0a0a0a'
  document.head.appendChild(themeMeta)
})
