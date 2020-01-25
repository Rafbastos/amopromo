import React from 'react';

import postService from '../../services/post';

export default (props) => {
    const body = {
        "coverage_begin": "2020-11-04",
        "coverage_end": "2020-11-10",
        "destination": 2,
        "coverages": [
          1
        ]
      }
      const {data, isLoading, error } = postService(props.api, body);

    if(error){
      return <p>{error.message}</p>
    }
  
    if(isLoading){
      return <p>Aguarde um Momento...</p>
    }

    return (
      <div>
        {data}
      </div>
    )
}