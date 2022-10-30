import React from 'react';
import { useGlobalContext } from './Contex';

const Pegenation = () => {

  const {page, nbPages,getPrevPage,getNextPage} = useGlobalContext();
  return (
    <>
  <div className='pegination-btn'>
    <button onClick={()=> getPrevPage()}>PREV</button>
    <p>{page + 1} of {nbPages}</p>
    <button onClick={()=> getNextPage()}>NEXT</button>
  </div>
    </>
  );
}

export default Pegenation;
