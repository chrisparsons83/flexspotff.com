import Nav from './Nav';

const Header: React.FC = () => {
  return (
    <div className="bg-gray-800 grid grid-cols-1">
      <div className="text-center text-3xl">FSF</div>
      <Nav />
    </div>
  );
};

export default Header;
