// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
    
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning: ReactDOM.render is no longer supported in React 18./.test(args[0])) {
      return;
    } else if (/Warning: validateDOMNesting(...): <div> cannot appear as a child of <tbody>/.test(args[0]))
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});