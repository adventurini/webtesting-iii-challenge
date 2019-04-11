import React from 'react';
import { 
    
    cleanup 
} from 'react-testing-library';
import renderer from 'react-test-renderer'; 
import 'react-testing-library/cleanup-after-each'; 

 import Display from './Display';

 afterEach(() => {
  cleanup();
});

 describe('<Display />', () => {
  it.skip('matches snapshot', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});

 describe('display open or close', () => {
    it('displays open', () => {

     })
})


