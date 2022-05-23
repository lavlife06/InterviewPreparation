import { useEffect, useState } from 'react';

const useApiData = () => {
  const url = 'https://api.publicapis.org/entries';

  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data) {
          setApiData(data.entries);
        }
      } catch (error) {
        console.log(error.message, 'err');
      }
    })();
  }, []);
  return [apiData];
};

export default useApiData;
