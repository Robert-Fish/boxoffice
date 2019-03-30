import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FilmGrid from './FilmGrid';

Enzyme.configure({ adapter: new Adapter() });

it('renders grid', () => {
  Enzyme.shallow(<FilmGrid />);
});
