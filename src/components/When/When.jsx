import { WhenSection, WhenDiv, WhenH2, WhenDescription } from './When.styled';

const When = () => {
  return (
    <WhenSection id="when">
      <WhenDiv>
        <WhenH2>O której zaczynamy</WhenH2>
        <WhenDescription>Niedziela - 10:00</WhenDescription>
        <WhenDescription>Czwartek - 18:00</WhenDescription>
      </WhenDiv>
    </WhenSection>
  );
};

export default When;
