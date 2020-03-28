import React from 'react'

export function DoubleArrow({ facing, onClick, className }) {
  function directionClassName() {
    switch (facing.trim().toLowerCase()) {
      case 'up':
        return 'up'
      case 'down':
        return 'down'
      default:
        return ''
    }
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      enable-background='new 0 0 24 24'
      height='24'
      viewBox='0 0 24 24'
      width='24'
      onClick={onClick}
      className={className}>
      <g>
        <rect fill='none' height='24' width='24' />
      </g>
      <g>
        <g>
          <polygon points='15.5,5 11,5 16,12 11,19 15.5,19 20.5,12' />
          <polygon points='8.5,5 4,5 9,12 4,19 8.5,19 13.5,12' />
        </g>
      </g>
    </svg>
  )
}