import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import store from '../redux/store';
import CountryCard from '../components/CountryCard';

const country = {
  name: {
    common: 'Ethiopia',
  },
  flags: {
    svg: 'https://disease.sh/assets/img/flags/et.png',
  },
};

describe('Country card component render correctly', () => {
  test('Check if country card renders correctly', () => {
    const CountryCardSnap = renderer.create(
      <Provider store={store}>
        <Router>
          <CountryCard flags={country.flags} name={country.name} />
        </Router>
      </Provider>,
    );
    expect(CountryCardSnap).toMatchSnapshot();
  });

  test("Check if text 'Ethiopia' exist inside the DOM", () => {
    render(
      <Provider store={store}>
        <Router>
          <CountryCard flags={country.flags} name={country.name} />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Ethiopia')).toBeInTheDocument();
    expect(screen.getByAltText('Ethiopia falg')).toBeInTheDocument();
  });
});
