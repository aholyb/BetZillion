import { Container, HomeScreenBookies, HomeScreenCards } from '..';
import { HomeBlock, Info, Title, Subtitle, GreenSubtitle, WhiteSubtitle, Description } from './HomeScreen.styles';

export const HomeScreen = () => {
  return (
    <HomeBlock>
      <Container>
        <Info>
          <Title>Welcome to</Title>
          <Subtitle>
            <GreenSubtitle>BET</GreenSubtitle>
            <WhiteSubtitle>Zillion</WhiteSubtitle>
          </Subtitle>
          <Description>
            All bookies offer a free bet or sign up offer for new customers, all you need to do to claim is click on
            your favourite free bet, where you will be redirected to the bookmaker's site, and then open an account with
            the aforementioned bookie.
          </Description>
        </Info>
        <HomeScreenBookies />
        <HomeScreenCards />
      </Container>
    </HomeBlock>
  );
};
