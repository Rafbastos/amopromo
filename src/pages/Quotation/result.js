import React from 'react';

import postService from '../../services/Post';

export default (props) => {
    const body = {
        "coverage_begin": "2020-11-04",
        "coverage_end": "2020-11-10",
        "destination": 1,
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
        {data.map(quot => (
          <ul key={quot.id}>
            <li>
              {quot.product_name}
            </li>
            <li>
              {quot.net_price}
            </li>
            <li>
              {quot.elder_net_price}
            </li>
            <li>
              {quot.currency}
            </li>
            <li>
              {quot.exchange_rate}
            </li>
          </ul>
        ))}
      </div>
    )
}