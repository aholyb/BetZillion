import { Wrapper, Language, Login } from './Settings.styles';

// temporary solution
const languages = [
  {
    lang: 'ENG',
    choosen: true,
  },
  {
    lang: 'RUS',
    choosen: false,
  },
];

const Settings = () => {
  return (
    <Wrapper>
      {/* temporary solution */}
      <Language>{languages[0].lang}</Language>
      <Login>Log in / Sign up</Login>
    </Wrapper>
  );
};

export default Settings;
