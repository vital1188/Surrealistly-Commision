export function setupNavigation() {
  const nav = document.querySelector('#main-nav')
  
  if (nav) {
    nav.innerHTML = `
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/commissions.html">Commissions</a></li>
        <li><a href="/contact.html">Work With Us</a></li>
      </ul>
      
      <button class="mobile-menu-toggle" aria-label="Toggle menu">
        <i class="fas fa-bars"></i>
      </button>
      
      <div class="mobile-menu">
        <button class="mobile-menu-close" aria-label="Close menu">
          <i class="fas fa-times"></i>
        </button>
        <ul>
          <li><a href="/" class="mobile-link">Home</a></li>
          <li><a href="/commissions.html" class="mobile-link">Commissions</a></li>
          <li><a href="/contact.html" class="mobile-link">Work With Us</a></li>
        </ul>
      </div>
    `
    
    // Setup mobile menu functionality
    setTimeout(() => {
      const mobileMenuToggle = document.querySelector('.mobile-menu-toggle')
      const mobileMenuClose = document.querySelector('.mobile-menu-close')
      const mobileMenu = document.querySelector('.mobile-menu')
      const mobileLinks = document.querySelectorAll('.mobile-link')
      
      // Mobile menu toggle
      if (mobileMenuToggle && mobileMenuClose && mobileMenu) {
        mobileMenuToggle.addEventListener('click', () => {
          mobileMenu.classList.add('active')
        })
        
        mobileMenuClose.addEventListener('click', () => {
          mobileMenu.classList.remove('active')
        })
        
        mobileLinks.forEach(link => {
          link.addEventListener('click', () => {
            mobileMenu.classList.remove('active')
          })
        })
      }
    }, 100)
  }
}
