import p5 from 'p5'

export function setupBackground() {
  initP5Background()
}

export function initP5Background() {
  new p5(sketch, 'p5-container')
}

function sketch(p: p5) {
  const lines: Line[] = []
  const lineCount = 30
  const accentColors = [
    [255, 62, 108], // pink
    [64, 224, 208], // turquoise
    [255, 215, 0]   // gold
  ]
  
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    
    // Create initial lines
    for (let i = 0; i < lineCount; i++) {
      lines.push(new Line(p, accentColors))
    }
  }
  
  p.draw = () => {
    p.clear()
    
    // Update and display lines
    for (const line of lines) {
      line.update()
      line.display()
    }
  }
  
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }
  
  // Line class for fine line aesthetic
  class Line {
    private p: p5
    private startPoint: p5.Vector
    private endPoint: p5.Vector
    private controlPoint1: p5.Vector
    private controlPoint2: p5.Vector
    private velocity: number
    private thickness: number
    private color: number[]
    private alpha: number
    private lifespan: number
    private maxLifespan: number
    private accentColors: number[][]
    private useAccentColor: boolean
    
    constructor(p: p5, accentColors: number[][]) {
      this.p = p
      this.accentColors = accentColors
      this.reset()
    }
    
    reset() {
      // Randomly position the line
      this.startPoint = this.p.createVector(
        this.p.random(this.p.width), 
        this.p.random(this.p.height)
      )
      
      // Create end point at a random distance and angle
      const angle = this.p.random(this.p.TWO_PI)
      const distance = this.p.random(100, 300)
      this.endPoint = this.p.createVector(
        this.startPoint.x + this.p.cos(angle) * distance,
        this.startPoint.y + this.p.sin(angle) * distance
      )
      
      // Create control points for bezier curve
      this.controlPoint1 = this.p.createVector(
        this.p.random(this.p.width),
        this.p.random(this.p.height)
      )
      
      this.controlPoint2 = this.p.createVector(
        this.p.random(this.p.width),
        this.p.random(this.p.height)
      )
      
      this.velocity = this.p.random(0.001, 0.003)
      this.thickness = this.p.random(0.5, 2)
      
      // Decide if this will be a colored line (rare)
      this.useAccentColor = this.p.random() < 0.2 // 20% chance of color
      
      if (this.useAccentColor) {
        // Use an accent color
        this.color = this.accentColors[Math.floor(this.p.random(this.accentColors.length))]
      } else {
        // Use white
        this.color = [255, 255, 255]
      }
      
      this.alpha = this.p.random(20, 80)
      this.maxLifespan = this.p.random(200, 500)
      this.lifespan = this.maxLifespan
    }
    
    update() {
      // Slowly move control points
      this.controlPoint1.x += this.p.random(-1, 1) * this.velocity * 10
      this.controlPoint1.y += this.p.random(-1, 1) * this.velocity * 10
      this.controlPoint2.x += this.p.random(-1, 1) * this.velocity * 10
      this.controlPoint2.y += this.p.random(-1, 1) * this.velocity * 10
      
      // Decrease lifespan
      this.lifespan -= 1
      
      // Reset when lifespan is over
      if (this.lifespan <= 0) {
        this.reset()
      }
    }
    
    display() {
      // Calculate alpha based on lifespan
      const alphaMultiplier = this.lifespan / this.maxLifespan
      const currentAlpha = this.alpha * alphaMultiplier
      
      // Set stroke properties
      this.p.stroke(this.color[0], this.color[1], this.color[2], currentAlpha)
      this.p.strokeWeight(this.thickness)
      this.p.noFill()
      
      // Draw bezier curve
      this.p.beginShape()
      this.p.vertex(this.startPoint.x, this.startPoint.y)
      this.p.bezierVertex(
        this.controlPoint1.x, this.controlPoint1.y,
        this.controlPoint2.x, this.controlPoint2.y,
        this.endPoint.x, this.endPoint.y
      )
      this.p.endShape()
    }
  }
}
