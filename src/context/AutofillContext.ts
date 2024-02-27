import { createContext } from 'react';

interface AutofillContextType {
  tries: number;
  showAnswer: boolean;
  setShowAnswer: React.Dispatch<React.SetStateAction<boolean>>;
}

const AutofillContext = createContext<AutofillContextType>({
  tries: 3,
  showAnswer: false,
  setShowAnswer: () => {},
});

export default AutofillContext;
