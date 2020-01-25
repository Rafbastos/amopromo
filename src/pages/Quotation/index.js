import React, { useState, useEffect } from 'react';

import SelectBox from '../../components/forms/selectBox';

function Quotation () {  
  
  return (
    <>
      <h1>Quotação</h1>
        <div>
          <SelectBox api={'/base/destinations'} />

          
        </div>
    </>
  );
    
}

export default Quotation;
