export function setupCollaborations() {
  const collaborationsSection = document.querySelector('#collaborations .section-inner')
  
  if (collaborationsSection) {
    collaborationsSection.innerHTML = `
      <div class="container">
        <h2 class="section-title">Commissioned Work</h2>
        
        <div class="commission-intro">
          <p class="commission-tagline">Elevate your vision with bespoke surrealist art</p>
          <div class="fine-line"></div>
          <p class="commission-description">Surrealistly creates custom artwork for musicians, brands, and visionaries seeking to transcend conventional visual boundaries. Each piece is meticulously crafted to embody your unique narrative while challenging perception through surrealist elements.</p>
          <div class="language-element commission-language">
            <p class="language-prompt"><span class="typing-text">Your words become our creative blueprint...</span></p>
          </div>
        </div>
        
        <div class="collaborations-grid">
          <div class="collaboration-card">
            <div class="collaboration-image">
              <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Tears For Fears Album">
            </div>
            <h3 class="collaboration-title">Tears For Fears</h3>
            <div class="fine-line"></div>
            <p class="collaboration-description">Created the artwork for "Songs For A Nervous Planet" album, merging the band's emotional depth with surrealist imagery that resonated with their audience and elevated the album's visual identity.</p>
            <div class="prompt-tag">"Echoes of collective anxiety transformed into visual symphonies"</div>
            <a href="#" class="btn">View Project</a>
          </div>
          
          <div class="collaboration-card">
            <div class="collaboration-image">
              <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Music Festival">
            </div>
            <h3 class="collaboration-title">Sonic Dreamscape Festival</h3>
            <div class="fine-line"></div>
            <p class="collaboration-description">Designed immersive visual experiences for this cutting-edge music festival, creating a cohesive visual language across promotional materials, stage design, and interactive installations.</p>
            <div class="prompt-tag">"A convergence of sound and vision where reality dissolves"</div>
            <a href="#" class="btn">View Project</a>
          </div>
          
          <div class="collaboration-card">
            <div class="collaboration-image">
              <img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Concert Visuals">
            </div>
            <h3 class="collaboration-title">Ethereal Soundscapes Tour</h3>
            <div class="fine-line"></div>
            <p class="collaboration-description">Created dynamic, responsive visuals for this international concert tour, with AI-generated art that reacted to music in real-time, creating unique experiences for each performance.</p>
            <div class="prompt-tag">"Music visualized as architectural dreamscapes in constant flux"</div>
            <a href="#" class="btn">View Project</a>
          </div>
        </div>
        
        <div class="commission-services">
          <h3 class="services-title">Services</h3>
          <div class="services-grid">
            <div class="service-item">
              <div class="service-icon"><i class="fas fa-music"></i></div>
              <h4>Music Industry</h4>
              <p>Album artwork, tour visuals, music videos, and promotional materials that capture your sonic identity.</p>
              <div class="service-words">
                <span class="service-word">Resonance</span>
                <span class="service-word">Harmony</span>
                <span class="service-word">Rhythm</span>
              </div>
            </div>
            
            <div class="service-item">
              <div class="service-icon"><i class="fas fa-building"></i></div>
              <h4>Brand Identity</h4>
              <p>Distinctive visual assets that set your brand apart through surrealist imagery and conceptual depth.</p>
              <div class="service-words">
                <span class="service-word">Distinction</span>
                <span class="service-word">Essence</span>
                <span class="service-word">Vision</span>
              </div>
            </div>
            
            <div class="service-item">
              <div class="service-icon"><i class="fas fa-film"></i></div>
              <h4>Film & Media</h4>
              <p>Conceptual art, promotional posters, and visual effects that challenge perception and reality.</p>
              <div class="service-words">
                <span class="service-word">Narrative</span>
                <span class="service-word">Cinematic</span>
                <span class="service-word">Sequence</span>
              </div>
            </div>
            
            <div class="service-item">
              <div class="service-icon"><i class="fas fa-palette"></i></div>
              <h4>Fine Art</h4>
              <p>Limited edition prints and bespoke pieces for collectors and art enthusiasts.</p>
              <div class="service-words">
                <span class="service-word">Timeless</span>
                <span class="service-word">Evocative</span>
                <span class="service-word">Profound</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="commission-process">
          <h3 class="process-title">The Process</h3>
          <div class="process-steps">
            <div class="process-step">
              <div class="step-number">01</div>
              <h4>Consultation</h4>
              <p>We begin with an in-depth discussion about your vision, goals, and the emotions you want to evoke.</p>
              <div class="process-keywords">
                <span class="process-keyword">Listen</span>
                <span class="process-keyword">Understand</span>
                <span class="process-keyword">Envision</span>
              </div>
            </div>
            
            <div class="process-step">
              <div class="step-number">02</div>
              <h4>Concept Development</h4>
              <p>Translating your ideas into surrealist concepts, with preliminary sketches and mood boards.</p>
              <div class="process-keywords">
                <span class="process-keyword">Interpret</span>
                <span class="process-keyword">Transform</span>
                <span class="process-keyword">Conceptualize</span>
              </div>
            </div>
            
            <div class="process-step">
              <div class="step-number">03</div>
              <h4>Creation</h4>
              <p>Using AI and digital tools to bring the concept to life, with regular updates and refinements.</p>
              <div class="process-keywords">
                <span class="process-keyword">Generate</span>
                <span class="process-keyword">Refine</span>
                <span class="process-keyword">Evolve</span>
              </div>
            </div>
            
            <div class="process-step">
              <div class="step-number">04</div>
              <h4>Delivery</h4>
              <p>Final artwork delivered in your preferred format, with full usage rights as agreed.</p>
              <div class="process-keywords">
                <span class="process-keyword">Finalize</span>
                <span class="process-keyword">Present</span>
                <span class="process-keyword">Implement</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="language-element process-language">
          <div class="language-icon"><i class="fas fa-quote-left"></i></div>
          <blockquote class="language-quote">
            "The most powerful surrealist images begin as words—carefully chosen, precisely arranged, and transformed through the alchemy of AI and human imagination."
          </blockquote>
        </div>
        
        <div class="commission-cta">
          <h3>Ready to transform your vision?</h3>
          <div class="cta-words">
            <span class="cta-word">Imagine</span>
            <span class="cta-word">Collaborate</span>
            <span class="cta-word">Create</span>
          </div>
          <a href="#contact" class="btn">Commission Now</a>
        </div>
      </div>
    `
  }
}
