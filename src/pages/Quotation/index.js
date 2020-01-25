import React, { useState, useEffect } from 'react';

import SelectBox from '../../components/forms/SelectBox';
import Result from './Result';

function Quotation () {  
  
  return (
    <>
      <h1>Quotação</h1>
        <div>
          <SelectBox api={'/base/destinations'} />

          <Result api={'/quotation'}/>
        </div>
    </>
  );
    
}

export default Quotation;
