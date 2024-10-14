import { render, screen, fireEvent } from '@/utils/testUtils'
import Logo from '.'

describe('Logo Component', () => {
  it('should render Logo and validate filter white color', () => {
    const { getByRole } = render(<Logo color="white" />)
    const LogoItem = getByRole('main')
    expect(LogoItem).toHaveStyle(
      'filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(286deg) brightness(103%) contrast(103%)'
    )
  })

  it('should render logo with black color', () => {
    const { getByRole } = render(<Logo color="dark" />)
    const LogoItem = getByRole('main')
    expect(LogoItem).toHaveStyle(
      'filter: invert(0%) sepia(7%) saturate(1726%) hue-rotate(15deg) brightness(77%) contrast(87%)'
    )
  })
})
