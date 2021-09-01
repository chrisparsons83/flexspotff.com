import { usePicks } from '../hooks/usePicks';
import { DraftPickRow } from '../types';
import { AdpTableHeader } from './AdpTableHeader';
import { AdpTableRow } from './AdpTableRow';

const getPlayerKey = (pick) =>
  `${pick.metadata.position}|${pick.metadata.first_name} ${pick.metadata.last_name}`;

const AdpTable = () => {
  //TODO: pull this from a database
  const draftsToLookup = [
    '732849644899532800',
    '732850921549217792',
    '732842166044434432',
    '732852004648521728',
    '732847883560312832',
  ];
  const draftResults = usePicks(draftsToLookup)
    .map((draft) => draft.data?.results)
    .flat()
    .filter((x) => !!x);

  const numberOfDrafts = Math.ceil(draftResults.length / 180);
  const draftFreq: Map<string, number[]> = new Map();

  for (const pick of draftResults) {
    if (pick)
      draftFreq.set(getPlayerKey(pick), [
        ...(draftFreq.get(getPlayerKey(pick)) || []),
        pick.pick_no,
      ]);
  }

  const draftTable: DraftPickRow[] = [];

  for (const [key, draftSpots] of draftFreq.entries()) {
    const [position, name] = key.split('|');
    const percentDrafted = draftSpots.length / numberOfDrafts;

    for (let i = draftSpots.length; i < numberOfDrafts; i++) {
      draftSpots.push(181);
    }

    draftTable.push({
      name,
      position,
      adp: draftSpots.reduce((a, b) => a + b) / numberOfDrafts,
      min: Math.min(...draftSpots),
      max: Math.max(...draftSpots),
      percentDrafted,
    });
  }

  // TODO: Don't loop through this stupid array three times
  draftTable.sort((a, b) => a.adp - b.adp);

  for (let i = 0; i < draftTable.length; i++) {
    draftTable[i].rank = i + 1;
  }

  if (numberOfDrafts < 1) return null;

  return (
    <div>
      <AdpTableHeader />
      {draftTable.map((pick) => (
        <AdpTableRow data={pick} key={pick.name} />
      ))}
    </div>
  );
};

export { AdpTable };
