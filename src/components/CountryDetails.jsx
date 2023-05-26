import { useParams } from "react-router-dom";
import Navigation from "./Navigation";
import TopBar from "./TopBar";
import { useDispatch, useSelector } from "react-redux";
import {
  detailsSelector,
  fetchCountryDetails,
} from "../redux/details/detailsSlice";
import { useEffect } from "react";
import "../styles/CountryDetails.css";
import DetailsTable from "./DetailsTable";

export default function CountryDetails() {
  const params = useParams();
  const dispatch = useDispatch();

  const { countryName } = params;
  const { countryDetails, isLoading, error } = useSelector(detailsSelector);

  useEffect(() => {
    dispatch(fetchCountryDetails(countryName));
  }, [countryName]);
  return (
    <>
      <div className="details-container">
        <Navigation>
          <div className="header-title">
            <h5>COVID-19 Cases</h5>
          </div>
        </Navigation>
        {isLoading && <p className="loading">Loading...</p>}
        {!!Object.keys(countryDetails).length && !isLoading && !error && (
          <>
            <TopBar
              src={countryDetails?.countryInfo?.flag}
              title={countryDetails?.country}
              population={countryDetails?.population?.toLocaleString()}
            />
            <h4>{countryName.toUpperCase()}: COVID-19 current stats</h4>
            <DetailsTable countryDetail={countryDetails} />
          </>
        )}
        {error && (
          <div className="error-container">
            <h3 className="error">{error}</h3>
          </div>
        )}
      </div>
    </>
  );
}
