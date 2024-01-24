import { options_array } from '../../types';

/* Bunny Base Case dropdown */
export const baseCaseOptions1: options_array[] = [
  {
    value: 'n <= 1',
    label: 'n <= 1',
  },
  {
    value: 'n > 1',
    label: 'n > 1',
  },
  {
    value: 'n < 1',
    label: 'n < 1',
  },
];

/* Bunny Code dropdown */
export const codeOptions1: options_array[] = [
  {
    value: 'n <= 1',
    label: 'n <= 1',
  },
  {
    value: 'n > 1',
    label: 'n > 1',
  },
];

export const codeOptions2: options_array[] = [
  {
    value: '0',
    label: '0',
  },
  {
    value: '1',
    label: '1',
  },
  {
    value: 'n',
    label: 'n',
  },
];

export const codeOptions3: options_array[] = [
  {
    value: 'n + fib(n-1)',
    label: 'n + fib(n-1)',
  },
  {
    value: 'fib(n-1) + fib(n-2)',
    label: 'fib(n-1) + fib(n-2)',
  },
];
