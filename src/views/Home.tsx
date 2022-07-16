import { useState, useEffect } from 'react';
import { Beer } from 'interfaces/Beer.interface';
import { api, endpoints } from 'api';

const Home = () => {
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    api
      .get<Beer[]>(endpoints.beers, { params: { per_page: 6 } })
      .then(({ data }) => {
        setBeers(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {beers.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default Home;
