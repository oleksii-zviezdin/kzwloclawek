import {
  WhoWeAreMain,
  WhoWeAreH2,
  WhoWeAreWelcome,
  WhoWeAreList,
  WhoWeAreListItem,
  WhoWeAreDescription,
  WhoWeAreMotto,
  WhoWeAreWishes,
} from './WhoWeAre.styled';

const WhoWeAre = () => {
  return (
    <WhoWeAreMain>
      <WhoWeAreH2>
        Cieszymy się, że odwiedziłeś stronę naszego kościoła!
      </WhoWeAreH2>
      <div>
        <WhoWeAreWelcome>Kim jesteśmy</WhoWeAreWelcome>
        <WhoWeAreList>
          <WhoWeAreListItem>
            <WhoWeAreDescription>
              Jesteśmy społecznością ludzi, których życie zostało przemienione
              przez Boga. Wierzymy, że Jezus Chrystus jest odpowiedzią na każdą
              potrzebę człowieka, a kościół to miejsce relacji, inspiracji i
              Bożego działania. Chcemy pokazywać, że Jezus żyje i że jest On
              drogą, prawdą oraz życiem!
            </WhoWeAreDescription>
          </WhoWeAreListItem>
          <WhoWeAreListItem>
            <WhoWeAreDescription>
              Jesteśmy częścią{' '}
              <a href="https://kz.pl/">Kościoła Zielonoświątkowego</a> w RP.
            </WhoWeAreDescription>
          </WhoWeAreListItem>
          <WhoWeAreListItem>
            <WhoWeAreDescription>
              Kościołem, który głosi, że człowiek może mieć relację z Bogiem
              przez Jezusa Chrystusa, otrzymując dzięki Chrystusowi zbawienie,
              odpuszczenie grzechów i nowe życie.
            </WhoWeAreDescription>
          </WhoWeAreListItem>
          <WhoWeAreListItem>
            <WhoWeAreDescription>
              Kościołem, który kocha ludzi i pragnie docierać do każdej grupy
              społecznej głosząc Dobrą Nowinę o Jezusie, będącym światłem w
              ciemności oraz nadzieją tam, gdzie jej nie ma.
            </WhoWeAreDescription>
          </WhoWeAreListItem>
          <WhoWeAreListItem>
            <WhoWeAreDescription>
              Społecznością ludzi, którzy naśladują Jezusa Chrystusa każdego
              dnia w rzeczach małych i wielkich, pokazując, że można żyć
              inaczej.
            </WhoWeAreDescription>
          </WhoWeAreListItem>
        </WhoWeAreList>
      </div>
      <WhoWeAreWelcome>Nasze motto brzmi:</WhoWeAreWelcome>
      <WhoWeAreMotto>„Kochamy Boga, służymy ludziom.”</WhoWeAreMotto>
      <WhoWeAreWishes>
        Niech Bóg dziś przemawia do Twojego serca. On jest wystarczająco silny
        aby zmienić Twoje życie. Niezależnie od tego kim jesteś – niech Bóg Cię
        błogosławi!
      </WhoWeAreWishes>
      <iframe
        style={{
          width: '100%',
          height: '46vw',
          marginBottom: '32px',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
          borderRadius: '1.25vw',
          outline: '0.5vw solid rgba(255, 255, 255, 0.45)',
        }}
        src="https://www.youtube.com/embed/VKecz1MwWpA?si=o1oleOuk4gZSergc"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </WhoWeAreMain>
  );
};

export default WhoWeAre;
