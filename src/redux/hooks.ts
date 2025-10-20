'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

type TDebounce = {
  searchQuery: string;
  delay: number;
};

export const useDebounce = ({ searchQuery, delay }: TDebounce) => {
  const [debounceValue, setDebounceValue] = useState<string>(searchQuery);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(searchQuery);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery, delay]);

  return debounceValue;
};
