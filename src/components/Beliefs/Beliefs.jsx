import {
  BeliefsSection,
  BeliefsH2,
  BeliefsH3,
  BeliefsList,
  BeliefsListItem,
  BeliefsDescription,
} from './Beliefs.styles';

const Beliefs = () => {
  return (
    <BeliefsSection>
      <BeliefsH2>W co wierzymy</BeliefsH2>
      <BeliefsH3>Wyznanie wiary Kościoła Zielonoświątkowego w Polsce</BeliefsH3>
      <BeliefsList>
        <BeliefsListItem>
          <BeliefsDescription>
            Wierzymy, że Pismo Święte – Biblia – jest Słowem Bożym, nieomylnym i
            natchnionym przez Ducha Świętego, i stanowi jedyną normę wiary i
            życia.
          </BeliefsDescription>
        </BeliefsListItem>
        <BeliefsListItem>
          <BeliefsDescription>
            Wierzymy w Boga w Trójcy Świętej jedynego, w osobach Ojca i Syna, i
            Ducha Świętego.
          </BeliefsDescription>
        </BeliefsListItem>
        <BeliefsListItem>
          <BeliefsDescription>
            Wierzymy w Synostwo Boże Jezusa Chrystusa, poczętego z Ducha
            Świętego, narodzonego z Marii Dziewicy; w Jego śmierć na krzyżu za
            grzech świata i Jego zmartwychwstanie w ciele; w Jego
            wniebowstąpienie i powtórne przyjście w chwale.
          </BeliefsDescription>
        </BeliefsListItem>
        <BeliefsListItem>
          <BeliefsDescription>
            Wierzymy w pojednanie z Bogiem przez opamiętanie i wiarę w
            ewangelię, w chrzest i Wieczerzę Pańską.
          </BeliefsDescription>
        </BeliefsListItem>
        <BeliefsListItem>
          <BeliefsDescription>
            Wierzymy w chrzest Duchem Świętym, przeżywanie pełni Ducha i Jego
            darów.
          </BeliefsDescription>
        </BeliefsListItem>
        <BeliefsListItem>
          <BeliefsDescription>
            Wierzymy w jeden Kościół, święty, powszechny i apostolski.
          </BeliefsDescription>
        </BeliefsListItem>
        <BeliefsListItem>
          <BeliefsDescription>
            Wierzymy w uzdrowienie chorych jako znak łaski i mocy Bożej.
          </BeliefsDescription>
        </BeliefsListItem>
        <BeliefsListItem>
          <BeliefsDescription>
            Wierzymy w zmartwychwstanie i życie wieczne.
          </BeliefsDescription>
        </BeliefsListItem>
      </BeliefsList>
    </BeliefsSection>
  );
};

export default Beliefs;
