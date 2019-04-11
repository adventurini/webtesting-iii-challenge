import React from 'react';
import { 
  render,
  cleanup  
} from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import renderer from 'react-test-renderer'; // install this for snapshots?
import Dashboard from './Dashboard';


afterEach(() => { cleanup() });

describe('<Dashboard />', () => {
  it('matches snapshot', () => {
      const tree = renderer.create(<Dashboard />).toJSON();
      expect(tree).toMatchSnapshot();
  });
});

describe('Dashboard component tests', () => {
	test('should render controls and display', () => {
		const { getByText } = render(<Dashboard />);

		getByText(/unlocked/i);
		getByText(/open/i);
		getByText(/lock gate/i);
		getByText(/close gate/i);
	});
});