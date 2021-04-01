// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
// 	render(<App />);
// 	const linkElement = screen.getByText(/learn react/i);
// 	expect(linkElement).toBeInTheDocument();
// });

// test('renders App component', () => {
// 	render(<App />);

// 	screen.getByRole('img');
// });

const myMock = jest.fn();

console.dir(myMock, { showhidden: true, depth: 10, colors: true });

console.dir(myMock.mock);
