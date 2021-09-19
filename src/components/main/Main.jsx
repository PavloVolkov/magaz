import React from 'react';
import PropTypes from 'prop-types';
import ProdCArd from './PrCArd/PrCArd';

const data = {
  idd: '1',
  name: 'first',
};
const Main = () => {
  return (
    <>
      <ProdCArd name={data.name} pos={data.idd} />
    </>
  );
};

Main.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
};

export default Main;
