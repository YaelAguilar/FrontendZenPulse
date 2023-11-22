import React from 'react';
import PropTypes from 'prop-types';

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [firstName, setFirstName] = React.useState('');

  return (
    <UserContext.Provider value={{ firstName, setFirstName }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node,  // Agrega propTypes para 'children'
};

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
