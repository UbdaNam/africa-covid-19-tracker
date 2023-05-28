import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import store from '../redux/store';
import CountryTable from '../components/DetailsTable';

const countryDetails = {
  countryDetail: {
    population: 15243234,
    cases: 458234,
    active: 2423,
    critical: 5,
    recovered: 234552,
    deaths: 98,
    tests: 9834573,
  },
};

const CountryTableSnap = renderer.create(
  <Provider store={store}>
    <Router>
      <CountryTable countryDetail={countryDetails.countryDetail} />
    </Router>
  </Provider>,
);

describe('Country table component render correctly', () => {
  test('Check if country table renders correctly', () => {
    expect(CountryTableSnap).toMatchSnapshot();
  });

  test("Check if text 'Population and Population count' exist inside the DOM", () => {
    render(
      <Provider store={store}>
        <Router>
          <CountryTable countryDetail={countryDetails.countryDetail} />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Population')).toBeInTheDocument();
    expect(screen.getByText('15,243,234')).toBeInTheDocument();
  });
});
