import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

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
    <nav>
      <ul className={styles.ul}>
        {mocks.map(({ title, link }) => (
          <li key={title}>
            <Link to={link} className={styles.link}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
