'use client'

import styled, { keyframes } from 'styled-components'

const rotation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`

const floating = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 300ms;
  box-shadow: 0px 0px 10px 1px #000000ee;
  border-radius: 5px;
`

export const Front = styled.div`
  background-color: #151515;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 5px;
  overflow: hidden;
  transform: rotateY(180deg);
  color: white;
`

export const Back = styled(Front)`
  justify-content: center;
  display: flex;
  align-items: center;
  overflow: hidden;

  &::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 160px;
    height: 160%;
    background: linear-gradient(
      90deg,
      transparent,
      #ff9966,
      #ff9966,
      transparent
    );
    animation: ${rotation} 5000ms infinite linear;
  }
`

export const BackContent = styled.div`
  position: absolute;
  width: 99%;
  height: 99%;
  background-color: #151515;
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

export const Img = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

export const Circle = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #ffbb66;
  position: relative;
  filter: blur(15px);
  animation: ${floating} 2600ms infinite linear;

  &#bottom {
    background-color: #ff8866;
    left: 50px;
    top: 0px;
    width: 150px;
    height: 150px;
    animation-delay: -800ms;
  }

  &#right {
    background-color: #ff2233;
    left: 160px;
    top: -80px;
    width: 30px;
    height: 30px;
    animation-delay: -1800ms;
  }
`

export const FrontContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Badge = styled.small`
  background-color: #00000055;
  padding: 2px 10px;
  border-radius: 10px;
  backdrop-filter: blur(2px);
  width: fit-content;
`

export const Description = styled.div`
  box-shadow: 0px 0px 10px 5px #00000088;
  width: 100%;
  padding: 10px;
  background-color: #00000099;
  backdrop-filter: blur(5px);
  border-radius: 5px;
`

export const Title = styled.div`
  font-size: 11px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;

  p {
    width: 50%;
  }
`

export const CardFooter = styled.p`
  color: #ffffff88;
  margin-top: 5px;
  font-size: 8px;
`

////finish with hover ///////
export const Wrapper = styled.div`
  overflow: visible;
  width: 190px;
  height: 254px;

  &:hover ${Content} {
    transform: rotateY(180deg);
  }
`
