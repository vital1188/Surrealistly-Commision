export function setupContact() {
  const contactSection = document.querySelector('#contact .section-inner')
  
  if (contactSection) {
    contactSection.innerHTML = `
      <div class="container">
        <h2 class="section-title">Commission Work</h2>
        
        <div class="contact-intro" style="max-width: 600px; margin: 0 auto 3rem auto; text-align: center;">
          <p style="color: var(--color-text-secondary); margin-bottom: 1rem;">Ready to transform your vision into surrealist art? Let's discuss your project and create something extraordinary together.</p>
          <div class="language-element">
            <p class="language-prompt">Your words are the seeds from which visual worlds will grow.</p>
          </div>
        </div>
        
        <div class="contact-form">
          <form id="contact-form">
            <div class="form-group">
              <label for="name" class="form-label">Name</label>
              <input type="text" id="name" class="form-input" required>
            </div>
            
            <div class="form-group">
              <label for="email" class="form-label">Email</label>
              <input type="email" id="email" class="form-input" required>
            </div>
            
            <div class="form-group">
              <label for="project-type" class="form-label">Project Type</label>
              <select id="project-type" class="form-input" required>
                <option value="" disabled selected>Select project type</option>
                <option value="music">Music Industry (Album Art, Tour Visuals)</option>
                <option value="brand">Brand Identity</option>
                <option value="film">Film & Media</option>
                <option value="fine-art">Fine Art Commission</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="budget" class="form-label">Budget Range</label>
              <select id="budget" class="form-input" required>
                <option value="" disabled selected>Select budget range</option>
                <option value="1000-3000">$1,000 - $3,000</option>
                <option value="3000-5000">$3,000 - $5,000</option>
                <option value="5000-10000">$5,000 - $10,000</option>
                <option value="10000+">$10,000+</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="timeline" class="form-label">Project Timeline</label>
              <select id="timeline" class="form-input" required>
                <option value="" disabled selected>Select timeline</option>
                <option value="urgent">Urgent (1-2 weeks)</option>
                <option value="standard">Standard (3-4 weeks)</option>
                <option value="flexible">Flexible (1-2 months)</option>
                <option value="ongoing">Ongoing Collaboration</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="message" class="form-label">Project Vision <span style="font-size: 0.8rem; font-style: italic;">(Be descriptive—your language guides our creation)</span></label>
              <textarea id="message" class="form-textarea" placeholder="Describe your vision using evocative language. The more vivid and detailed your words, the more precisely we can translate them into visual art..." required></textarea>
            </div>
            
            <div class="language-keywords">
              <p class="keywords-title">Inspiration Keywords</p>
              <div class="keywords-container">
                <span class="keyword">Ethereal</span>
                <span class="keyword">Dramatic</span>
                <span class="keyword">Nostalgic</span>
                <span class="keyword">Futuristic</span>
                <span class="keyword">Organic</span>
                <span class="keyword">Mechanical</span>
                <span class="keyword">Dreamlike</span>
                <span class="keyword">Symbolic</span>
                <span class="keyword">Narrative</span>
                <span class="keyword">Abstract</span>
                <span class="keyword">Textural</span>
                <span class="keyword">Luminous</span>
              </div>
              <p class="keywords-hint">Click keywords to add them to your project vision</p>
            </div>
            
            <button type="submit" class="btn">Submit Inquiry</button>
          </form>
        </div>
      </div>
    `
    
    // Add form submission handler and keyword functionality
    setTimeout(() => {
      const form = document.getElementById('contact-form') as HTMLFormElement
      const messageTextarea = document.getElementById('message') as HTMLTextAreaElement
      const keywords = document.querySelectorAll('.keyword')
      
      if (form && messageTextarea && keywords) {
        // Add keyword click functionality
        keywords.forEach(keyword => {
          keyword.addEventListener('click', () => {
            const keywordText = keyword.textContent
            if (messageTextarea.value) {
              messageTextarea.value += ` ${keywordText}`
            } else {
              messageTextarea.value = `${keywordText}`
            }
            messageTextarea.focus()
          })
        })
        
        // Form submission
        form.addEventListener('submit', (e) => {
          e.preventDefault()
          alert('Thank you for your commission inquiry! We will review your project details and get back to you within 48 hours.')
          form.reset()
        })
      }
    }, 100)
  }
}
