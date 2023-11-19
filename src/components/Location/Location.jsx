import {
  LocationSection,
  LocationDiv,
  H2,
  LocationDescription,
  Iframe,
} from './Location.styled';

/* eslint-disable jsx-a11y/iframe-has-title */
const Location = () => {
  return (
    <LocationSection id="where">
      <LocationDiv>
        <H2>Gdzie nas znajdziesz</H2>
        <LocationDescription>
          Zapraszamy na <br></br> ul. Kościuszki 26
        </LocationDescription>
      </LocationDiv>
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d662.42750182138!2d19.0612708050117!3d52.65320439927758!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471c993b3fbeb913%3A0x33e36b7338978991!2zS2_Fm2Npw7PFgiBaaWVsb25vxZt3acSFdGtvd3kgWmLDs3IgQ2hyeXN0dXNhIFpiYXdpY2llbGEgd2UgV8WCb2PFgmF3a3U!5e1!3m2!1suk!2spl!4v1699911424982!5m2!1suk!2spl"
        allowFullScreen=""
        style={{
          '@media screen and (minWidth: 320px)': {
            width: '600px', // ваші стилі для max-width при виконанні медіа-запиту
          },
          // width: '300px',
          // height: '300px',
          borderRadius: '1.5vw',
        }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></Iframe>
    </LocationSection>
  );
};

export default Location;
