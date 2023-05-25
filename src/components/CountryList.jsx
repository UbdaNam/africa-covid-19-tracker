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

export default function CountryList() {
  const dispatch = useDispatch();
  const { countries, isLoading, error } = useSelector(countriesSelector);
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
  console.log(countries, isLoading, error);
  return (
    <>
      <Navigation>
        <h2 className="header-year-text">2015</h2>
        <div className="header-title">
          <h5>Africa countries</h5>
        </div>
      </Navigation>
      <div className="main-wrapper">
        <div className="contenent-wrapper">
          <div className="img-container">
            <img src="/assets/Updated-structure.png" alt="Africa map" />
          </div>
          <div className="content">
            <h3>Africa</h3>
            <p>population: 123,343,342</p>
          </div>
        </div>
        <h4>STATS BY COUNTRY</h4>
        <div className="countries-container">
          {countries.map((country) => {
            <CountryCard />;
          })}
        </div>
      </div>
    </>
  );
}
