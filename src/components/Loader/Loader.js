import React from 'react';
import { Bars } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import css from './loader.module.css';

export const Spinner = () => {
  return <Bars className={css.loader} color="#00BFFF" height={90} width={90} />;
};
