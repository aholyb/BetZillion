import { Nav, Ul, Li, MenuLink } from './Menu.styles';

// temporary solution
const mocks = [
  {
    title: 'Betting sites',
    link: '/betting',
    hasSublinks: true,
  },
  {
    title: 'Reviews',
    link: '/reviews',
    hasSublinks: true,
  },
  {
    title: 'Bonuses',
    link: '/bonuses',
    hasSublinks: true,
  },
  {
    title: 'Payment Methods',
    link: '/payment',
    hasSublinks: true,
  },
  {
    title: 'Sports',
    link: '/sports',
    hasSublinks: true,
  },
  {
    title: 'Learn',
    link: '/learn',
    hasSublinks: true,
  },
  {
    title: 'News',
    link: '/news',
    hasSublinks: false,
  },
  {
    title: 'About',
    link: '/about',
    hasSublinks: false,
  },
];

const Menu = () => {
  return (
    <Nav>
      <Ul>
        {mocks.map(({ title, link }) => (
          <Li key={title}>
            <MenuLink to={link}>{title}</MenuLink>
          </Li>
        ))}
      </Ul>
    </Nav>
  );
};

export default Menu;
