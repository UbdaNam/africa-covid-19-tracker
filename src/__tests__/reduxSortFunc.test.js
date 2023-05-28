import { sortByName } from '../redux/countries/countriesSlice';

describe('Check the sort by name function work correctly', () => {
  test('Check sort by name work for 3 names', () => {
    const arr = [
      {
        name: {
          common: 'Hussen',
        },
      },
      {
        name: {
          common: 'Angel',
        },
      },
      {
        name: {
          common: 'Meru',
        },
      },
    ];
    const result = [
      {
        name: {
          common: 'Angel',
        },
      },
      {
        name: {
          common: 'Hussen',
        },
      },
      {
        name: {
          common: 'Meru',
        },
      },
    ];
    expect(sortByName(arr)).toEqual(result);
  });
  test('Check sort by name work for 2 names', () => {
    const arr = [
      {
        name: {
          common: 'Hussen',
        },
      },
      {
        name: {
          common: 'Angel',
        },
      },
    ];
    const result = [
      {
        name: {
          common: 'Angel',
        },
      },
      {
        name: {
          common: 'Hussen',
        },
      },
    ];
    expect(sortByName(arr)).toEqual(result);
  });
});
