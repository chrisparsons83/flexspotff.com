import React from 'react';

type Props = {
  leagueName: string;
};

const LeagueStandings: React.FC<Props> = ({ leagueName }) => {
  return (
    <div>
      <h2>{leagueName}</h2>
      <table>
        <thead>
          <tr className="bg-gray-900 text-gray-400">
            <th>Rank</th>
            <th>Team</th>
            <th>Record</th>
            <th>PF</th>
            <th>PA</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-700 text-gray-50">
            <td>1</td>
            <td>Jason Garrett</td>
            <td>26-0</td>
            <td>1000000.00</td>
            <td>4.2</td>
          </tr>
          <tr className="bg-gray-800 text-gray-50">
            <td>2</td>
            <td>Jason Jarrett</td>
            <td>0-26</td>
            <td>4.2</td>
            <td>1000000.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LeagueStandings;
