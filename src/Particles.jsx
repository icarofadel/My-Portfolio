// src/Particles.js
import React, { useEffect } from 'react'

const ParticlesComponent = () => {
  useEffect(() => {
    window.particlesJS.load('particles-js', '/particles.json', () => {
      console.log('callback - particles.js config loaded')
    })
  }, [])

  return (
    <div
      id="particles-js"
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1
      }}
    />
  )
}

export default ParticlesComponent
