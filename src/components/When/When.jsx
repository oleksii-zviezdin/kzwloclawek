import { WhenSection, WhenDiv, H2, WhenDescription } from './When.styled';

const When = () => {
  return (
    <WhenSection id="when">
      <WhenDiv>
        <H2>O której zaczynamy</H2>
        <WhenDescription>Niedziela - 10:00</WhenDescription>
        <WhenDescription>Czwartek - 18:00</WhenDescription>
      </WhenDiv>
    </WhenSection>
  );
};

export default When;
