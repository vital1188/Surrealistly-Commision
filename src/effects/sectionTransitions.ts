// Intersection Observer for section transitions
export function setupSectionTransitions() {
  // Add section backgrounds with fine lines
  addSectionBackgrounds()
  
  // Setup intersection observer for fade-in animations
  setupIntersectionObserver()
  
  // Setup parallax effect for section dividers
  setupParallaxDividers()
}

function addSectionBackgrounds() {
  const sections = document.querySelectorAll('section:not(.hero-section)')
  
  sections.forEach((section, index) => {
    const sectionBg = document.createElement('div')
    sectionBg.className = 'section-bg'
    
    // Create unique fine line patterns for each section
    for (let i = 0; i < 5; i++) {
      const line = document.createElement('div')
      line.className = 'fine-line-bg'
      
      // Alternate between horizontal, vertical, and diagonal lines
      if (i % 3 === 0) {
        line.classList.add('horizontal')
        line.style.top = `${Math.random() * 100}%`
        line.style.opacity = `${Math.random() * 0.2 + 0.05}`
      } else if (i % 3 === 1) {
        line.classList.add('vertical')
        line.style.left = `${Math.random() * 100}%`
        line.style.opacity = `${Math.random() * 0.2 + 0.05}`
      } else {
        line.classList.add('diagonal')
        line.style.top = `${Math.random() * 100}%`
        line.style.left = `${Math.random() * 50}%`
        line.style.transform = `rotate(${Math.random() * 60 - 30}deg)`
        line.style.opacity = `${Math.random() * 0.2 + 0.05}`
      }
      
      sectionBg.appendChild(line)
    }
    
    section.appendChild(sectionBg)
  })
}

function setupIntersectionObserver() {
  // Get all section inner content
  const sectionInners = document.querySelectorAll('.section-inner')
  
  // Add content to section inners
  sectionInners.forEach((inner, index) => {
    // Get the parent section id
    const sectionId = inner.parentElement?.id
    
    if (sectionId === 'about') {
      inner.innerHTML = document.getElementById('about')?.innerHTML || ''
      document.getElementById('about')!.innerHTML = ''
    } else if (sectionId === 'collaborations') {
      inner.innerHTML = document.getElementById('collaborations')?.innerHTML || ''
      document.getElementById('collaborations')!.innerHTML = ''
    } else if (sectionId === 'gallery') {
      inner.innerHTML = document.getElementById('gallery')?.innerHTML || ''
      document.getElementById('gallery')!.innerHTML = ''
    } else if (sectionId === 'contact') {
      inner.innerHTML = document.getElementById('contact')?.innerHTML || ''
      document.getElementById('contact')!.innerHTML = ''
    }
    
    // Add fade-in classes to section elements
    const title = inner.querySelector('.section-title')
    if (title) {
      title.classList.add('fade-in')
    }
    
    const contentElements = inner.querySelectorAll('p, .btn, .about-image, .collaboration-card, .gallery-item, .form-group')
    contentElements.forEach((element, i) => {
      element.classList.add('fade-in', `delay-${(i % 5 + 1) * 100}`)
    })
  })
  
  // Create intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Reset animations when section comes into view
        const fadeElements = entry.target.querySelectorAll('.fade-in')
        fadeElements.forEach(element => {
          // Force a reflow to restart the animation
          element.classList.remove('fade-in')
          void element.offsetWidth
          element.classList.add('fade-in')
        })
      }
    })
  }, {
    threshold: 0.1
  })
  
  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section)
  })
}

function setupParallaxDividers() {
  const dividers = document.querySelectorAll('.section-divider')
  
  // Add unique styling to each divider
  dividers.forEach((divider, index) => {
    const dot = divider.querySelector('.dot')
    if (dot) {
      // Alternate accent colors
      if (index % 3 === 0) {
        dot.style.backgroundColor = '#ff3e6c' // pink
      } else if (index % 3 === 1) {
        dot.style.backgroundColor = '#40e0d0' // turquoise
      } else {
        dot.style.backgroundColor = '#ffd700' // gold
      }
    }
  })
  
  // Parallax effect on scroll
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    
    dividers.forEach((divider) => {
      const dividerTop = divider.getBoundingClientRect().top + scrollY
      const offset = (scrollY - dividerTop) * 0.1
      
      const verticalLine = divider.querySelector('.vertical-line')
      if (verticalLine) {
        verticalLine.style.transform = `translateY(${offset}px)`
      }
      
      const dot = divider.querySelector('.dot')
      if (dot) {
        dot.style.transform = `translateY(${offset * 1.5}px)`
      }
    })
  })
}
