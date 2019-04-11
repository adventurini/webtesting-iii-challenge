import React from 'react';
import { toHaveClass } from 'jest-dom';
import { 
    render, 
    // fireEvent, 
    cleanup 
} from 'react-testing-library';
import renderer from 'react-test-renderer'; // install this for snapshots?
import 'react-testing-library/cleanup-after-each';

import Display from './Display';


expect.extend({ toHaveClass });

afterEach(() => { cleanup() });



describe('<Display />', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Display />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});


describe('Display component tests', () => {
	it('should display component', () => {
		render(<Display />);
	});

	it('should display gate unlocked and open by default', () => {
		const { getByText } = render(<Display />);
		getByText(/unlocked/i);
		getByText(/open/i);
	});

	it('should display Closed if closed props is true', () => {
		const { getByText } = render(<Display closed={true} />);
		getByText(/closed/i);
	});

	it('should display Locked if the locked prop is true', () => {
		const { getByText } = render(<Display locked={true} />);
		getByText(/locked/i);
	});

	it('should have red-led class when locked or closed', () => {
		const { getByText } = render(<Display locked={true} />);
		const locked = getByText(/locked/i);
		expect(locked).toHaveClass('red-led');
	});

	it('should have green-led class when unlocked or open', () => {
		const { getByText } = render(<Display locked={false} />);
		const locked = getByText(/unlocked/i);
		expect(locked).toHaveClass('green-led');
	});
});


