import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType
} from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  background?: string
  isDisabled?: boolean
  as?: ElementType
} & ButtonTypes

const Button = ({
  children,
  background,
  isDisabled,
  ...props
}: ButtonProps) => (
  <S.Wrapper background={background} disabled={isDisabled} {...props}>
    {children}
  </S.Wrapper>
)

export default Button
