'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      offset: 20,
    });
  }, []);

  return null;
};
