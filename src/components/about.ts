export function setupAbout() {
  const aboutSection = document.querySelector('#about .section-inner')
  
  if (aboutSection) {
    aboutSection.innerHTML = `
      <div class="container">
        <h2 class="section-title">About</h2>
        <div class="about-grid">
          <div class="about-content">
            <div class="language-ribbon">
              <span class="ribbon-word">Narrative</span>
              <span class="ribbon-word">Imagination</span>
              <span class="ribbon-word">Language</span>
              <span class="ribbon-word">Vision</span>
            </div>
            
            <p>Vitalie Burcovschi, founder and artist behind Surrealistly, brings a unique perspective to the world of surrealism, blending the realms of theater and technology. Originally trained as a theater director, Vitalie developed a deep understanding of <span class="highlight-word">storytelling</span>, composition, and human emotion.</p>
            
            <div class="fine-line"></div>
            
            <p>This fusion of two seemingly different worlds defines Surrealistly. Vitalie's work captures the <span class="highlight-word">drama</span>, emotion, and narrative depth of theater, while utilizing the precision and <span class="highlight-word">innovation</span> of artificial intelligence. His surreal creations explore the boundaries between dreams and reality, constantly pushing the limits of what art can be.</p>
            
            <div class="fine-line"></div>
            
            <p>In every piece, you'll find traces of storytelling, shaped by Vitalie's background in directing. His work invites viewers not just to look, but to <span class="highlight-word">imagine</span>—to step into scenes that feel like glimpses of otherworldly theater performances frozen in time.</p>
            
            <div class="language-element">
              <div class="language-icon"><i class="fas fa-quote-left"></i></div>
              <blockquote class="language-quote">
                "The most powerful tool in AI art is not the algorithm, but the language that guides it. Words are the bridge between human imagination and artificial intelligence."
                <cite>— Vitalie Burcovschi</cite>
              </blockquote>
            </div>
            
            <a href="#contact" class="btn">Commission Work</a>
          </div>
          <div class="about-image">
            <img src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Surreal artwork by Vitalie Burcovschi">
            <div class="image-caption">
              <p>"Words become worlds when imagination bridges reality and dreams."</p>
            </div>
          </div>
        </div>
        
        <div class="language-philosophy">
          <h3>The Language of Imagination</h3>
          <div class="philosophy-grid">
            <div class="philosophy-item">
              <div class="philosophy-icon"><i class="fas fa-book-open"></i></div>
              <h4>Narrative Architecture</h4>
              <p>Every image we create is built on a foundation of narrative—words carefully chosen to evoke specific emotions, memories, and visual elements.</p>
            </div>
            
            <div class="philosophy-item">
              <div class="philosophy-icon"><i class="fas fa-comment-dots"></i></div>
              <h4>Linguistic Alchemy</h4>
              <p>We transform language into visual art through a process that treats words as raw materials—each adjective, noun, and verb contributing to the final composition.</p>
            </div>
            
            <div class="philosophy-item">
              <div class="philosophy-icon"><i class="fas fa-theater-masks"></i></div>
              <h4>Theatrical Imagination</h4>
              <p>Drawing from Vitalie's background in theater, our work creates frozen moments of surreal performances where words become actors on a visual stage.</p>
            </div>
            
            <div class="philosophy-item">
              <div class="philosophy-icon"><i class="fas fa-robot"></i></div>
              <h4>AI as Collaborator</h4>
              <p>We view artificial intelligence not as a tool but as a creative partner that interprets human language and transforms it through its own unique understanding.</p>
            </div>
          </div>
        </div>
      </div>
    `
  }
}
