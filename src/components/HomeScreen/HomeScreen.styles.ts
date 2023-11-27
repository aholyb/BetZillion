import { styled } from 'styled-components';

import background from '../../assets/home_bg.png';

export const HomeBlock = styled.div`
  padding: 108px 0 190px;
  background: url('${background}');
  background-size: cover;
`;

export const Info = styled.div`
  max-width: 829px;
`;

export const Title = styled.h2`
  color: #fff;
  font-family: Noto Sans;
  font-size: 24px;
  font-style: italic;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 24px;
  text-transform: uppercase;
  padding-left: 15px;
`;

export const Subtitle = styled.div`
  margin-top: -55px;
`;

export const WhiteSubtitle = styled.span`
  color: #fff;
  font-family: Noto Sans;
  font-size: 144px;
  font-style: italic;
  font-weight: 900;
  line-height: normal;
  text-transform: uppercase;
`;

export const GreenSubtitle = styled.span`
  color: #1db954;
  font-family: Noto Sans;
  font-size: 144px;
  font-style: italic;
  font-weight: 900;
  line-height: normal;
  text-transform: uppercase;
`;

export const Description = styled.p`
  color: #acacb5;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  margin-bottom: 86px;
`;
