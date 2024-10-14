import { render, screen, fireEvent } from '@/utils/testUtils'
import Button from '.'
import theme from '@/styles/theme'

describe('Button Component', () => {
  it('should render the button and check click event', () => {
    const handleClick = jest.fn(() => console.log('clicked act'))
    render(
      <Button onClick={handleClick} as="button">
        Click Me
      </Button>
    )

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
    fireEvent.click(buttonElement)

    expect(handleClick).toHaveBeenCalled()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should render the button with correct styles when disabled', () => {
    render(
      <Button onClick={() => {}} isDisabled={true}>
        Disabled Button
      </Button>
    )

    const buttonElement = screen.getByRole('button', {
      name: /disabled button/i
    })
    expect(buttonElement).toBeDisabled()
    expect(buttonElement).toHaveStyle(
      `background-color: ${theme.colors.greyzy.normal}`
    )
    expect(buttonElement).toHaveStyle('cursor: not-allowed')
  })

  it('should render multiple children correctly', () => {
    const { getByText } = render(
      <Button>
        <span>Click</span> me
      </Button>
    )
    expect(getByText('Click')).toBeInTheDocument()
    expect(getByText('me')).toBeInTheDocument()
  })

  it('should render Button as a link', () => {
    const { getByRole, debug, container } = render(
      <Button as="a" href="#">
        Link
      </Button>
    )

    debug(container)
    expect(getByRole('link')).toBeInTheDocument()
  })

  it('should match the snapshot', () => {
    const { asFragment } = render(<Button>Snapshot Test</Button>)
    expect(asFragment()).toMatchSnapshot()
  })
})
