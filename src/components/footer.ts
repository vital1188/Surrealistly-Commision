export function setupFooter() {
  const footer = document.querySelector('#footer')
  
  if (footer) {
    footer.innerHTML = `
      <div class="container">
        <div class="footer-content">
          <p>&copy; ${new Date().getFullYear()} Surrealistly. All rights reserved.</p>
        </div>
      </div>
    `
  }
}
