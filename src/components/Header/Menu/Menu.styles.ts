import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav``;

export const Li = styled.li``;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  grid-column-gap: 24px;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: #969696;
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;
