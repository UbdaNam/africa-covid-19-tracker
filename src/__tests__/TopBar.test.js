import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import store from '../redux/store';
import TopBar from '../components/TopBar';

const MockProps = {
  src: 'https://disease.sh/assets/img/flags/et.png',
  title: 'Ethiopia',
  population: '23458262',
};

const TopBarSnap = renderer.create(
  <Provider store={store}>
    <Router>
      <TopBar
        src={MockProps.src}
        title={MockProps.title}
        population={MockProps.population}
      />
    </Router>
  </Provider>,
);

describe('Top bar component render correctly', () => {
  test('Check if top bar renders correctly', () => {
    expect(TopBarSnap).toMatchSnapshot();
  });

  test("Check if alt text 'Ethiopia' exist inside the DOM", () => {
    render(
      <Provider store={store}>
        <Router>
          <TopBar
            src={MockProps.src}
            title={MockProps.title}
            population={MockProps.population}
          />
          {' '}
        </Router>
      </Provider>,
    );

    const image = screen.getByAltText('Ethiopia');

    expect(image.src).toContain('https://disease.sh/assets/img/flags/et.png');
    expect(screen.getByAltText('Ethiopia')).toBeInTheDocument();
  });
});
