// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import CityEnum from './enum/CityEnum';

console.log(CityEnum['臺北市']);
test('renders learn react link', () => {
  expect(CityEnum['臺北市']).toEqual('Taipei');
});