import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  countriesSelector,
  fetchCountries,
} from '../redux/countries/countriesSlice';
import Navigation from './Navigation';
import '../styles/CountryList.css';
import CountryCard from './CountryCard';
import TopBar from './TopBar';

export default function CountryList() {
  const dispatch = useDispatch();
  const { countries } = useSelector(countriesSelector);
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  return (
    <>
      <Navigation>
        <div className="header-title">
          <h5>African countries</h5>
        </div>
      </Navigation>
      <div className="main-wrapper">
        <TopBar
          src="/assets/Updated-structure.png"
          title="Africa"
          population="1,406,728,744"
        />
        <h4>STATS BY COUNTRY</h4>
        <div className="countries-container">
          {countries.map(({ flags, name }) => (
            <CountryCard key={name.common} flags={flags} name={name} />
          ))}
        </div>
      </div>
    </>
  );
}
