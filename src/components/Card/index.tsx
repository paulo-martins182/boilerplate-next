import * as S from './styles'

const Card = () => (
  <S.Wrapper>
    <S.Content>
      <S.Back>
        <S.BackContent>
          <div className="svg_box"></div>
          <strong>Hover Me</strong>
        </S.BackContent>
      </S.Back>
      <S.Front>
        <S.Img>
          <S.Circle />
          <S.Circle id="right" />
          <S.Circle id="bottom" />
        </S.Img>
        <S.FrontContent>
          <S.Badge>Pasta</S.Badge>
          <S.Description>
            <S.Title>
              <p>
                <strong>Spaguetti Bolognese</strong>
              </p>
              <div className="icon_box"></div>
            </S.Title>
            <S.CardFooter>30 Mins &nbsp; | &nbsp; 1 Serving</S.CardFooter>
          </S.Description>
        </S.FrontContent>
      </S.Front>
    </S.Content>
  </S.Wrapper>
)

export default Card
