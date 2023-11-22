import PropTypes from 'prop-types';
import { useUser } from '../context/UserContext';
import Logo from "../../assets/1Logozenpulse.png";

function Header() {
  const { firstName } = useUser();

    return (
      <div className="bg-blue-500 p-4 sm:h-20 text-white flex items-center justify-between">
        <div className="flex items-center">
          <img src={Logo} className="h-24 w-auto sm:h-30 sm:w-30 mr-4" alt="Logo" />
          <div>
            <h1 className="text-2xl font-bold">Zenpulse</h1>
            {firstName && <p className="mt-2">Welcome for the first time, {firstName}!</p>}
          </div>
        </div>
      </div>
    );
}

Header.propTypes = {
  firstName: PropTypes.string,
};

export default Header;
