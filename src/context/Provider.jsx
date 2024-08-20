import React, { useState } from "react";
import propTypes from 'prop-types';
import AppContext from "./AppContext";

function Provider({children}) {

  const [name, setName] = useState('Manual');

  const value = {
    name,
    setName
  };

  return ( 
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
   );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;