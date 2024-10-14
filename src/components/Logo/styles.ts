'use client'

import styled from 'styled-components'
import { css } from 'styled-components'
import { LogoProps } from '.'

type LogoStyleProps = Pick<LogoProps, 'color'>

export const LogoModifier = {
  white: () => css`
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(286deg)
      brightness(103%) contrast(103%);
  `,
  dark: () => css`
    filter: invert(0%) sepia(7%) saturate(1726%) hue-rotate(15deg)
      brightness(77%) contrast(87%);
  `
}

export const Wrapper = styled.main<LogoStyleProps>`
  ${({ color }) => css`
    padding-top: 4px;
    ${!!color && LogoModifier[color]()}
  `}
`
