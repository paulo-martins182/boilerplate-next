import Image from 'next/image'

import logoFill from '../../../public/images/logo-fill.png'
import * as S from './styles'

export interface LogoProps {
  color?: 'white' | 'dark'
}

const Logo = ({ color }: LogoProps = {}) => (
  <S.Wrapper color={color}>
    <Image src={logoFill} width={250} height={60} alt="Logo Prolog" />
  </S.Wrapper>
)

export default Logo
