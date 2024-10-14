'use client'

import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

type ButtonStyleProps = Pick<ButtonProps, 'background'>

export const Wrapper = styled.button<ButtonStyleProps>`
  ${({ theme, background }) => css`
    all: unset;
    border-radius: 8px;
    background: ${background || theme.colors.orange.normal};
    min-height: 45px;
    padding: 0 6px;
    min-width: 100px;
    font-size: ${theme.fontSizes.medium};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing.medium};
    color: ${theme.colors.white.light};
    opacity: 0.8;
    cursor: pointer;
    transition: ${theme.animationDurations.fast};
    &:hover {
      opacity: 1;
    }

    &:disabled {
      background: ${theme.colors.greyzy.normal};
      cursor: not-allowed;
    }
  `}
`
