import { useState } from 'react';

const useFetch = (url, headers = {}, body, method) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
//${process.env.NEXT_PUBLIC_BASE_API}
  const fetchData = async () => {
    console.log("the iddd:",body);
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:3001/api/v1/${url}`, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        ...body && {
          body : JSON.stringify(body)
        }
      });
      const result = await response.json();
      console.log(result);
      setData(result);
    } 
    catch (error) {
      //console.log(error);
      console.log(error);
      setError(error);
    } 
    finally {
      setTimeout(()=>{
        setIsLoading(false);
      },1000)
    }
  };
  return { data, isLoading, error, fetchData };
};

export default useFetch;