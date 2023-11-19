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
      {/* <div>
        <h4>
          Komentarz do wyznania wiary Kościoła Zielonoświątkowego w Polsce
        </h4>
        <ul>
          <li>
            <div>
              <h5>Pismo Święte</h5>
            </div>
          </li>
          <li>
            <div>
              <h5>Bóg Trójjedyny</h5>
            </div>
          </li>
          <li>
            <div>
              <h5>Jezus Chrystus</h5>
            </div>
          </li>
          <li>
            <div>
              <h5>Upadek i zbawienie człowieka</h5>
            </div>
          </li>
          <li>
            <div>
              <h5>Duch Święty</h5>
            </div>
          </li>
          <li>
            <div>
              <h5>Chrzest Duchem Świętym</h5>
            </div>
          </li>
          <li>
            <div>
              <h5>Ustanowienia Chrystusowe</h5>
            </div>
          </li>
          <li>
            <div>
              <h5>Uzdrowienie chorych</h5>
            </div>
          </li>
          <li>
            <div>
              <h5>Kościół</h5>
            </div>
          </li>
          <li>
            <div>
              <h5>Małżeństwo</h5>
            </div>
          </li>
          <li>
            <div>
              <h5>Rzeczy ostateczne</h5>
            </div>
          </li>
        </ul>
      </div> */}
    </BeliefsSection>
  );
};

export default Beliefs;
