import React, { useState, useEffect } from 'react';

function Get (url) {

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const accessData = process.env.REACT_APP_USER_SERVICE + ":" + process.env.REACT_APP_PASSWORD_SERVICE;

    useEffect(() => {
      setIsLoading(true);
      let h = new Headers();
      h.append('Accept', 'application/json');
      let encoded = window.btoa(accessData);
      let auth = 'Basic ' + encoded;
      h.append('Authorization', auth);

      let req = new Request(process.env.REACT_APP_BASE_URL+url, {
        method: 'GET',
        headers: h,
        credentials: 'same-origin'
      });

      fetch(req)
        .then(response => {
            if(response.ok){
              return response.json();
            } else {
              throw Error("Error fetching posts!");
            }
          })
        .then(data => {
          setData(data);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error);
        })
    }, []);

    return { data, isLoading, error }
}

export default Get;