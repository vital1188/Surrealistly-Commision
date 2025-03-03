export function setupGallery() {
  const gallerySection = document.querySelector('#gallery .section-inner')
  
  if (gallerySection) {
    gallerySection.innerHTML = `
      <div class="container">
        <h2 class="section-title">Gallery</h2>
        
        <div class="language-imagination">
          <div class="word-cloud">
            <span class="floating-word size-lg">Imagination</span>
            <span class="floating-word size-md">Dreamscape</span>
            <span class="floating-word size-sm">Ethereal</span>
            <span class="floating-word size-md">Transcend</span>
            <span class="floating-word size-lg">Language</span>
            <span class="floating-word size-sm">Whisper</span>
            <span class="floating-word size-md">Ephemeral</span>
            <span class="floating-word size-sm">Liminal</span>
            <span class="floating-word size-lg">Vision</span>
            <span class="floating-word size-md">Subconscious</span>
            <span class="floating-word size-sm">Reverie</span>
            <span class="floating-word size-md">Phantasm</span>
          </div>
          
          <div class="language-intro">
            <p class="language-quote">"Words are the raw material of imagination, the building blocks of surrealist worlds."</p>
            <p class="language-description">Every piece in our gallery begins with language—prompts, poetry, and narrative fragments that guide the AI's creative process. The interplay between words and visual elements creates a unique dialogue between human imagination and artificial intelligence.</p>
          </div>
        </div>
        
        <div class="gallery-grid">
          <div class="gallery-item">
            <img src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Surreal artwork">
            <div class="gallery-overlay">
              <div class="gallery-overlay-content">
                <h3 class="gallery-title">Whispered Echoes</h3>
                <p class="prompt-text">"Echoes of forgotten conversations drift through a cathedral of memory"</p>
              </div>
            </div>
          </div>
          
          <div class="gallery-item">
            <img src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Surreal artwork">
            <div class="gallery-overlay">
              <div class="gallery-overlay-content">
                <h3 class="gallery-title">Liminal Passage</h3>
                <p class="prompt-text">"Between waking and dreaming, a doorway opens to impossible architecture"</p>
              </div>
            </div>
          </div>
          
          <div class="gallery-item">
            <img src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Surreal artwork">
            <div class="gallery-overlay">
              <div class="gallery-overlay-content">
                <h3 class="gallery-title">Ephemeral Construct</h3>
                <p class="prompt-text">"Memories crystallize into fragile structures that dissolve at first light"</p>
              </div>
            </div>
          </div>
          
          <div class="gallery-item">
            <img src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Surreal artwork">
            <div class="gallery-overlay">
              <div class="gallery-overlay-content">
                <h3 class="gallery-title">Subconscious Tide</h3>
                <p class="prompt-text">"Beneath the surface of thought, currents of ancient symbols surge"</p>
              </div>
            </div>
          </div>
          
          <div class="gallery-item">
            <img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Surreal artwork">
            <div class="gallery-overlay">
              <div class="gallery-overlay-content">
                <h3 class="gallery-title">Phantasmal Dialogue</h3>
                <p class="prompt-text">"Words become spectral entities conversing across dimensions"</p>
              </div>
            </div>
          </div>
          
          <div class="gallery-item">
            <img src="https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Surreal artwork">
            <div class="gallery-overlay">
              <div class="gallery-overlay-content">
                <h3 class="gallery-title">Lexical Dreamscape</h3>
                <p class="prompt-text">"A landscape where every mountain and river is formed from poetry"</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="language-process">
          <h3>From Words to Worlds</h3>
          <div class="process-visualization">
            <div class="process-step-visual">
              <div class="step-icon"><i class="fas fa-feather-alt"></i></div>
              <div class="step-line"></div>
              <div class="step-text">
                <h4>Language Seed</h4>
                <p>Every creation begins with carefully crafted language—evocative phrases that contain the essence of the final image.</p>
              </div>
            </div>
            
            <div class="process-step-visual">
              <div class="step-icon"><i class="fas fa-brain"></i></div>
              <div class="step-line"></div>
              <div class="step-text">
                <h4>Semantic Interpretation</h4>
                <p>The AI analyzes the linguistic nuances, metaphors, and emotional undertones of the text.</p>
              </div>
            </div>
            
            <div class="process-step-visual">
              <div class="step-icon"><i class="fas fa-palette"></i></div>
              <div class="step-line"></div>
              <div class="step-text">
                <h4>Visual Synthesis</h4>
                <p>Words transform into visual elements, with each phrase influencing composition, color, and form.</p>
              </div>
            </div>
            
            <div class="process-step-visual">
              <div class="step-icon"><i class="fas fa-magic"></i></div>
              <div class="step-text">
                <h4>Artistic Refinement</h4>
                <p>Human artistic direction guides the final refinement, ensuring the visual outcome embodies the original linguistic vision.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="interactive-prompt">
          <h3>Experience the Language-to-Image Process</h3>
          <p>Enter a surreal phrase below to see how language shapes our creative process:</p>
          <div class="prompt-input-container">
            <input type="text" id="prompt-input" class="prompt-input" placeholder="e.g., 'Memories dissolve into oceans of forgotten time'">
            <button id="generate-btn" class="btn">Visualize</button>
          </div>
          <div id="prompt-result" class="prompt-result">
            <p class="prompt-explanation">Your phrase will be analyzed for emotional tone, symbolic elements, and compositional cues that would guide our AI in creating a unique surrealist image.</p>
          </div>
        </div>
      </div>
    `
    
    // Add interactive prompt functionality
    setTimeout(() => {
      const generateBtn = document.getElementById('generate-btn')
      const promptInput = document.getElementById('prompt-input') as HTMLInputElement
      const promptResult = document.getElementById('prompt-result')
      
      if (generateBtn && promptInput && promptResult) {
        generateBtn.addEventListener('click', () => {
          const prompt = promptInput.value.trim()
          
          if (prompt.length > 0) {
            // Analyze the prompt and provide feedback
            const words = prompt.split(' ')
            const emotionalWords = ['dream', 'memory', 'forgotten', 'ancient', 'ethereal', 'whisper', 'echo', 'dissolve', 'surreal', 'phantasm', 'reverie', 'subconscious']
            const foundEmotional = words.filter(word => emotionalWords.some(ew => word.toLowerCase().includes(ew.toLowerCase())))
            
            const colorWords = ['blue', 'red', 'golden', 'silver', 'emerald', 'crimson', 'azure', 'violet', 'obsidian']
            const foundColors = words.filter(word => colorWords.some(cw => word.toLowerCase().includes(cw.toLowerCase())))
            
            const elementWords = ['water', 'fire', 'earth', 'air', 'ocean', 'mountain', 'sky', 'forest', 'desert', 'river', 'cloud']
            const foundElements = words.filter(word => elementWords.some(ew => word.toLowerCase().includes(ew.toLowerCase())))
            
            let analysis = `<h4>Linguistic Analysis</h4><p>Your phrase contains `
            
            if (foundEmotional.length > 0) {
              analysis += `emotional elements (${foundEmotional.join(', ')}) that would evoke a ${foundEmotional.length > 1 ? 'complex emotional atmosphere' : 'specific mood'}. `
            } else {
              analysis += `neutral emotional tones that would create a contemplative atmosphere. `
            }
            
            if (foundColors.length > 0) {
              analysis += `The color palette would feature ${foundColors.join(' and ')} tones. `
            } else {
              analysis += `The color palette would be derived from the emotional undertones of your words. `
            }
            
            if (foundElements.length > 0) {
              analysis += `Natural elements like ${foundElements.join(' and ')} would form the compositional foundation.`
            } else {
              analysis += `Abstract forms and structures would dominate the composition.`
            }
            
            analysis += `</p><p>This linguistic seed would guide our AI to create a unique surrealist image that embodies the essence of your words.</p>`
            
            promptResult.innerHTML = analysis
            promptResult.style.opacity = '1'
          }
        })
      }
    }, 100)
  }
}
