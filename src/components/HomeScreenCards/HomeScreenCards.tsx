import { Cards, Card, CardText, Info, Price, Button, Review } from './HomeScreenCards.styles';

import img1 from '../../assets/card_1.png';
import img2 from '../../assets/card_2.png';
import img3 from '../../assets/card_3.png';
import img4 from '../../assets/card_4.png';
import img5 from '../../assets/card_5.png';

import img1text from '../../assets/card_1_text.svg';
import img2text from '../../assets/card_2_text.svg';
import img3text from '../../assets/card_3_text.svg';
import img4text from '../../assets/card_4_text.svg';
import img5text from '../../assets/card_5_text.svg';

const mocks = [
  {
    link: '/',
    srcImg: img1,
    srcText: img1text,
    title: '100% up to $1000',
    stars: 5,
  },
  {
    link: '/',
    srcImg: img2,
    srcText: img2text,
    title: '£30/€30 of Free Bets',
    stars: 4,
  },
  {
    link: '/',
    srcImg: img3,
    srcText: img3text,
    title: 'Risk Free £20 Bet',
    stars: 4,
  },
  {
    link: '/',
    srcImg: img4,
    srcText: img4text,
    title: '£20 Welcome Bonus',
    stars: 3,
  },
  {
    link: '/',
    srcImg: img5,
    srcText: img5text,
    title: '£50 Match Bet',
    stars: 2,
  },
];

export const HomeScreenCards = () => {
  return (
    <div>
      <Cards>
        {mocks.map((item) => (
          <Card key={item.srcImg} backgroundImg={item.srcImg}>
            <CardText src={item.srcText} alt={item.srcText} />
            <Info>
              <Price>{item.title}</Price>
              <Button>Bet Now</Button>
              <Review to={`/review${item.link}`}>Read Review</Review>
            </Info>
          </Card>
        ))}
      </Cards>
    </div>
  );
};
