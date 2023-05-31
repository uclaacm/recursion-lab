import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import Latex from 'react-latex-next';
import BricksBackground from '../assets/bricksBackground.png';
import MarioBackground from '../assets/marioBackground.png';
import rabbit from '../assets/rabbit.png';
import teachlalogo from '../assets/teach-la-logo.svg';

import FactorialQuestion from '../components/intro_comps/FactorialQuestion';
import IntroCode from '../components/intro_comps/intro_code';
import AppWrapper from '../components/shared/AppWrapper';
import Button from '../components/shared/Button';
import { HeaderSections } from '../components/shared/globalTypes';
import './intro.scss';

import ImageSlider from '../components/shared/SlideShow';
import 'katex/dist/katex.min.css';

const slides: { url: string; title: string }[] = [
  { url: `${MarioBackground}`, title: '1' },
  { url: `${BricksBackground}`, title: '2' },
  { url: `${teachlalogo}`, title: '3' },
  { url: `${rabbit}`, title: '4' },
];

function recursionCodeBlock(
  code: string,
  language: string,
  showLineNumbers: boolean,
  startingLineNumber: number
) {
  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      startingLineNumber={startingLineNumber}
      theme={dracula}
    />
  );
}
const code = `void doSomething() {
    //---- do stuff ----
    cout << "did something" << endl;
    //------------------

    doSomething();
}`;

const Intro: FC = () => {
  return (
    <div>
      <AppWrapper section={HeaderSections.INTRO_TITLE}>
        <div className="body">
          <div className="content-container">
            <div className="textbox">
              <h2 className="intro-title">Factorials</h2>
              <div className="intro-content">
                <Latex>
                  {`For a nonnegative integer $n$, the factorial of $n$ or $n!$ is the number resulting from multiplying
                  $$n\\cdot(n-1)\\cdot\\ldots\\cdot 2\\cdot 1$$ For example,  $4! = 4 \\cdot 3 \\cdot 2 \\cdot 1 = 24$.
                  In particular, if we already know $4!$, then we can compute $5!$ quickly:
                  $$5! = 5\\cdot(4\\cdot3\\cdot2\\cdot1) = 5\\cdot4! = 120$$`}
                </Latex>
                {FactorialQuestion()}
              </div>
            </div>
            <div className="textbox">
              <h2 className="intro-title">Recursion</h2>
              <div className="intro-content">
                <Latex>
                  {
                    'A recursive function is a function that calls itself in its definition. Take the below function as a basic example:'
                  }
                </Latex>
                <div
                  style={{
                    width: '500px',
                    margin: '15px auto',
                    fontFamily: 'monospace',
                  }}
                >
                  {recursionCodeBlock(code, 'cpp', true, 1)}
                </div>
                <Latex>
                  {`
                  Typically recursion is useful for solving problems whose solution is dependent on solving smaller subproblems. For
                  instance, in the factorial example, once we solved for $(n-1)!$, we can easily solve $n!$ by taking $n\\cdot (n-1)!$.
                  $$$$
                  For a lower level view of this, in the above example, when $\\textup{recursiveFunc}$ is called, the computer
                  creates a compartment for executing the function code. As the compartment runs, when the recursive function
                  is called again, the computer halts the current compartment, creates another compartment for the
                  new recursive function call, and begins to run the new compartment. Only when the new compartment finishes
                  running does the original compartment continue. However, this process may continue repeatedly as the new compartment
                  may call the recursive function again. Below is an slideshow of this process:
                  `}
                </Latex>
                <div
                  style={{
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '500px',
                      height: '280px',
                      marginBottom: '100px',
                      marginTop: '50px',
                    }}
                  >
                    <ImageSlider slides={slides} />
                  </div>
                </div>
                <Latex>
                  {`Note that we only call the recursive function once within its definition, resulting in the linear structure above, but
                  as you will see in later examples, there can be more than one call to the recursive function.
                  `}
                </Latex>
              </div>
            </div>
            <div className="textbox">
              <h2 className="intro-title">The Base Case</h2>
              <div className="intro-content">
                <Latex>
                  {`One important element of recursion is the base case. If we look at the function we wrote above and
                  actually tried to run it, it would never stop. Following the above example with compartments, the computer
                  would repeatedly create new compartments until it runs out of space:
                  $$$$
                  To fix this issue, we need to add some sort of check to our original function to let the process stop. This
                  motivates the idea of a base case, which could be thought of as the "simplest" version of the problem. When
                  the function encounters the base case, it will immediately return the answer since it doesn't rely on solving
                  simpler subproblems, being the simplest of them. Going back to the factorial example, if the base case were $n = 4$,
                  then we would be out of luck if wanted to find $3!$.
                  $$$$
                  It is up to the programmer to provide the base case and its corresponding answer. Furthermore, it is important
                  to correctly choose a base case as it is not enough to just stop the process. The base case should also be relevant to the problem.
                  Taking the factorial again, suppose the base case was $n = -4$. Then, we would somehow have to know $(-4)!$, which
                  is nonsense. Although this may allow the process to stop, our answers would all be wrong. For instance, if we computed
                  $3!$ with a base case of $n = -4$, we would have $$3\\cdot 2 \\cdot 1 \\cdot 0 \\cdot \\ldots \\cdot -4 = 0$$
                  `}
                </Latex>
                <IntroCode />
              </div>
            </div>
            <div className="textbox">
              <h2 className="intro-title">Summary</h2>
              <div className="intro-content">
                <Latex>
                  {`Recursion is a method for solving problems whose answer is dependent on solving simpler subproblems. This is implemented in
                  code as a recursive function, in which the function will call itself in its definition. An important aspect of a recursive function
                  is the base case, which represents the simplest possible subproblem. A correct base case will prevent the recursive function
                  from executing infinitely and will provide the answer to the simplest possible subproblem from which more complex problems will
                  depend on. (For some extra practice, go back and see what the code in the basic example above does).
                  `}
                </Latex>
              </div>
            </div>
            <div className="buttons">
              <Button icon={faLessThan} className="prev-btn" navigation="/" />
              <Button
                icon={faGreaterThan}
                className="next-btn"
                navigation="/problem1"
              />
            </div>
          </div>
        </div>
      </AppWrapper>
    </div>
  );
};

export default Intro;
