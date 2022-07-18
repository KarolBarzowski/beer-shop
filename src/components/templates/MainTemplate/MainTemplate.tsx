import { Container } from './MainTemplate.styles';
import Navigation from 'components/organisms/Navigation/Navigation';

const MainTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  );
};

export default MainTemplate;
