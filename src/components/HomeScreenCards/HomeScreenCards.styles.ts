import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

interface CardProps {
  backgroundImg: string;
}

export const Cards = styled.ul`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 35px;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const Card = styled.div<CardProps>`
  background: url(${(props) => props.backgroundImg});
  height: 400px;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
  position: relative;
`;

export const CardText = styled.img`
  position: absolute;
  top: 82px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Info = styled.div`
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Price = styled.div`
  color: #fff;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: italic;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 24px;
`;

export const Button = styled.button`
  background: var(--Main-color, #1db954);
  color: #fff;
  text-align: center;
  font-family: Noto Sans;
  font-size: 24px;
  font-style: italic;
  font-weight: 900;
  line-height: normal;
  text-transform: uppercase;
  outline: none;
  border: none;
  cursor: pointer;
  height: 60px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Review = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 46px;
  color: #acacb5;
  text-align: center;
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
