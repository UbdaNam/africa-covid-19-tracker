import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import store from '../redux/store';
import CountryList from '../components/CountryList';

const CountryListSnap = renderer.create(
  <Provider store={store}>
    <Router>
      <CountryList />
    </Router>
  </Provider>,
);

describe('Country list component render correctly', () => {
  test('Check if country list renders correctly', () => {
    expect(CountryListSnap).toMatchSnapshot();
  });

  test("Check if text 'Africa' exist inside the DOM", () => {
    render(
      <Provider store={store}>
        <Router>
          <CountryList />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Africa')).toBeInTheDocument();
  });
});
