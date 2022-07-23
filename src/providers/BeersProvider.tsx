import { useState, useEffect, createContext } from 'react';
import { Beer } from 'interfaces/Beer.interface';
import { useLazyGetBeersQuery } from 'store';

interface ContextInterface {
  beers: Beer[];
  isFetching: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const BeersContext = createContext<ContextInterface>({
  beers: [],
  isFetching: false,
  setPage: () => null
});

const BeersProvider = ({ children }: { children: React.ReactNode }) => {
  const [page, setPage] = useState<number>(1);
  const [beers, setBeers] = useState<Beer[]>([]);
  const [trigger, { data, isFetching }] = useLazyGetBeersQuery();

  useEffect(() => {
    trigger(page);
  }, [page]);

  useEffect(() => {
    setBeers((prevState) => [...prevState, ...(data ?? [])]);
  }, [data]);

  return (
    <BeersContext.Provider
      value={{
        beers,
        setPage,
        isFetching
      }}
    >
      {children}
    </BeersContext.Provider>
  );
};

export default BeersProvider;
