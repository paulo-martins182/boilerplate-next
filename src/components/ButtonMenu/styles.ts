'use client'

import styled from 'styled-components'

export const Hamburger = styled.label`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: -10px;
  z-index: 5;
  background: #1a202c;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    display: none;
  }

  svg {
    height: 20px;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: #d7e8e5;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    transition:
      stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  input:checked + svg {
    transform: rotate(-45deg);
  }

  input:checked + svg .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }
`
