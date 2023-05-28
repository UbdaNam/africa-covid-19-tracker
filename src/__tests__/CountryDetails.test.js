import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import store from '../redux/store';
import CountryDetails from '../components/CountryDetails';

describe('Country details component render correctly', () => {
  test('Check if country details renders correctly', () => {
    const CountryDetailsSnap = renderer.create(
      <Provider store={store}>
        <Router>
          <CountryDetails />
        </Router>
      </Provider>,
    );
    expect(CountryDetailsSnap).toMatchSnapshot();
  });

  test("Check if text 'COVID-19 cases' exist inside the DOM", () => {
    render(
      <Provider store={store}>
        <Router>
          <CountryDetails />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('COVID-19 Cases')).toBeInTheDocument();
  });
});
