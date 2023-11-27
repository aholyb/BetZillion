import { HeaderBlock, Wrapper, Info } from './Header.styles';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import Settings from './Settings/Settings';

export const Header = () => {
  return (
    <HeaderBlock>
      <Wrapper>
        <Info>
          <Logo />
          <Menu />
        </Info>
        <Settings />
      </Wrapper>
    </HeaderBlock>
  );
};
