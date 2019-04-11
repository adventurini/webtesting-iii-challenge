import React from 'react';
import { 
    cleanup 
} from 'react-testing-library';
import renderer from 'react-test-renderer'; 
import 'react-testing-library/cleanup-after-each'; 

 import Dashboard from './Dashboard';

 afterEach(() => {
  cleanup();
});

 describe('<Dashboard />', () => {
  it.skip('matches snapshot', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});

