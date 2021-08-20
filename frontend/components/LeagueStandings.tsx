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
            <th className="px-4">Rank</th>
            <th className="px-4">Team</th>
            <th className="px-4">Record</th>
            <th className="px-4">PF</th>
            <th className="px-4">PA</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-700 text-gray-50">
            <td>1</td>
            <td>Jason Garrett</td>
            <td>26-0</td>
            <td>1700.00</td>
            <td>1470.20</td>
          </tr>
          <tr className="bg-gray-800 text-gray-50">
            <td>2</td>
            <td>Jason Jarrett</td>
            <td>0-26</td>
            <td>1470.20</td>
            <td>1700.00</td>
          </tr>
          <tr className="bg-gray-700 text-gray-50">
            <td>3</td>
            <td>Jason Garrett</td>
            <td>26-0</td>
            <td>1700.00</td>
            <td>1470.20</td>
          </tr>
          <tr className="bg-gray-800 text-gray-50">
            <td>4</td>
            <td>Jason Jarrett</td>
            <td>0-26</td>
            <td>1470.20</td>
            <td>1700.00</td>
          </tr>
          <tr className="bg-gray-700 text-gray-50">
            <td>5</td>
            <td>Jason Garrett</td>
            <td>26-0</td>
            <td>1700.00</td>
            <td>1470.20</td>
          </tr>
          <tr className="bg-gray-800 text-gray-50">
            <td>6</td>
            <td>Jason Jarrett</td>
            <td>0-26</td>
            <td>1470.20</td>
            <td>1700.00</td>
          </tr>
          <tr className="bg-gray-700 text-gray-50">
            <td>7</td>
            <td>Jason Garrett</td>
            <td>26-0</td>
            <td>1700.00</td>
            <td>1470.20</td>
          </tr>
          <tr className="bg-gray-800 text-gray-50">
            <td>8</td>
            <td>Jason Jarrett</td>
            <td>0-26</td>
            <td>1470.20</td>
            <td>1700.00</td>
          </tr>
          <tr className="bg-gray-700 text-gray-50">
            <td>9</td>
            <td>Jason Garrett</td>
            <td>26-0</td>
            <td>1700.00</td>
            <td>1470.20</td>
          </tr>
          <tr className="bg-gray-800 text-gray-50">
            <td>10</td>
            <td>Jason Jarrett</td>
            <td>0-26</td>
            <td>1470.20</td>
            <td>1700.00</td>
          </tr>
          <tr className="bg-gray-700 text-gray-50">
            <td>11</td>
            <td>Jason Garrett</td>
            <td>26-0</td>
            <td>1700.00</td>
            <td>1470.20</td>
          </tr>
          <tr className="bg-gray-800 text-gray-50">
            <td>12</td>
            <td>Jason Jarrett</td>
            <td>0-26</td>
            <td>1470.20</td>
            <td>1700.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LeagueStandings;
