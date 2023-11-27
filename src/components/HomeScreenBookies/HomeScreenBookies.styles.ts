import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const Title = styled.h2`
  color: #fff;
  font-family: Noto Sans;
  font-size: 24px;
  font-style: italic;
  font-weight: 900;
  line-height: normal;
  text-transform: uppercase;
`;

export const ViewAll = styled(Link)`
  text-decoration: none;
  color: #fff;
  text-align: right;
  font-family: Noto Sans;
  font-size: 14px;
  font-style: italic;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;
