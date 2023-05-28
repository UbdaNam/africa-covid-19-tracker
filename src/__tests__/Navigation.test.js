import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import Navigation from '../components/Navigation';

const NavigationSnap = renderer.create(
  <Provider store={store}>
    <Router>
      <Navigation />
    </Router>
  </Provider>,
);

describe('Navigation component render correctly', () => {
  test('Check if navigation renders correctly', () => {
    expect(NavigationSnap).toMatchSnapshot();
  });
});
