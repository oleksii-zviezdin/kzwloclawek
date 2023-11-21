import {
  BeliefsH2,
  BeliefsH3,
  BeliefsList,
  BeliefsListItem,
  BeliefsDescription,
} from './Beliefs.styles';

const BaseBeliefs = [
  'Wierzymy, że Pismo Święte – Biblia – jest Słowem Bożym, nieomylnym i natchnionym przez Ducha Świętego, i stanowi jedyną normę wiary i życia.',
  'Wierzymy w Boga w Trójcy Świętej jedynego, w osobach Ojca i Syna, i Ducha Świętego.',
  'Wierzymy w Synostwo Boże Jezusa Chrystusa, poczętego z Ducha Świętego, narodzonego z Marii Dziewicy; w Jego śmierć na krzyżu za grzech świata i Jego zmartwychwstanie w ciele; w Jego wniebowstąpienie i powtórne przyjście w chwale.',
  'Wierzymy w pojednanie z Bogiem przez opamiętanie i wiarę w ewangelię, w chrzest i Wieczerzę Pańską.',
  'Wierzymy w chrzest Duchem Świętym, przeżywanie pełni Ducha i Jego darów.',
  'Wierzymy w jeden Kościół, święty, powszechny i apostolski.',
  'Wierzymy w uzdrowienie chorych jako znak łaski i mocy Bożej.',
  'Wierzymy w zmartwychwstanie i życie wieczne.',
];

const BeliefsBase = () => {
  return (
    <>
      <BeliefsH2>W co wierzymy</BeliefsH2>
      <BeliefsH3>Wyznanie wiary Kościoła Zielonoświątkowego w Polsce</BeliefsH3>
      <BeliefsList>
        {BaseBeliefs.map(description => {
          return (
            <BeliefsListItem>
              <BeliefsDescription>{description}</BeliefsDescription>
            </BeliefsListItem>
          );
        })}
      </BeliefsList>
    </>
  );
};

export default BeliefsBase;
