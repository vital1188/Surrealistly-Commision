export function setupHero() {
  const heroSection = document.querySelector('#hero')
  
  if (heroSection) {
    heroSection.innerHTML = `
      <div class="container">
        <div class="hero-content">
          <div class="word-animation">
            <span class="animated-word">Imagine</span>
            <span class="animated-word">Dream</span>
            <span class="animated-word">Create</span>
          </div>
          <h1 class="hero-title">Commissioned Surrealism for Visionary Brands</h1>
          <p class="hero-subtitle">Surrealistly creates bespoke AI-generated artwork that transcends conventional boundaries, merging theatrical storytelling with cutting-edge technology for musicians, brands, and visionaries.</p>
          <div class="language-element hero-language">
            <p class="language-prompt">From words to worlds, we transform language into visual poetry.</p>
          </div>
          <div class="hero-buttons">
            <a href="/commissions.html" class="btn">View Commissions</a>
            <a href="/contact.html" class="btn">Work With Us</a>
          </div>
        </div>
      </div>
      <div class="floating-words">
        <span class="float-word w1">Ethereal</span>
        <span class="float-word w2">Whisper</span>
        <span class="float-word w3">Dream</span>
        <span class="float-word w4">Ephemeral</span>
        <span class="float-word w5">Reverie</span>
        <span class="float-word w6">Liminal</span>
        <span class="float-word w7">Phantasm</span>
        <span class="float-word w8">Surreal</span>
      </div>
    `
  }
}
