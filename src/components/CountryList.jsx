import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  countriesSelector,
  fetchCountries,
} from "../redux/countries/countriesSlice";
import Navigation from "./Navigation";
import { useSelector } from "react-redux";
import "../styles/CountryList.css";
import CountryCard from "./CountryCard";
import TopBar from "./TopBar";

export default function CountryList() {
  const dispatch = useDispatch();
  const { countries, isLoading, error } = useSelector(countriesSelector);
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
  return (
    <>
      <Navigation>
        <h2 className="header-year-text">2015</h2>
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
