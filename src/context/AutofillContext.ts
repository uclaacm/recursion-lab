import { createContext } from 'react';

const AutofillContext = createContext({
  tries: 3,
  showAnswer: false,
});

export default AutofillContext;
