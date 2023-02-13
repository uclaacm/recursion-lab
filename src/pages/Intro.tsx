import { FC } from 'react';
import AppWrapper from '../components/shared/AppWrapper';
import Button from '../components/shared/Button';
import { HeaderSections } from '../components/shared/globalTypes';
import './intro.scss';

import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

const Intro: FC = () => {
  return (
    <div>
      <AppWrapper section={HeaderSections.INTRO_TITLE}>
        <>
          <div>Intro Page.</div>
          <Button icon="<" className="prev-button" navigation="/" />
          <Button icon=">" className="next-button" navigation="/problem1" />
          <div className="textbox">
              <h2 className='intro_title'>
                Factorials
              </h2>
              <div className="intro_content">
                <Latex>
                {`For a nonnegative integer $n$, the factorial of $n$ or $n!$ is the number resulting from multiplying 
                $$n\\cdot(n-1)\\cdot\\ldots\\cdot 2\\cdot 1$$ For example,  $4! = 4 \\cdot 3 \\cdot 2 \\cdot 1 = 24$.
                In particular, if we already know $4!$, then we can compute $5!$ quickly:
                $$5! = 5\\cdot(4\\cdot3\\cdot2\\cdot1) = 5\\cdot4! = 120$$`}
                </Latex>
              </div>
          </div>
          <div className="textbox">
              <h2 className='intro_title'>
                Recursion
              </h2>
              <div className='intro_content'>
                <Latex>
                  {`The intuition for recursion is that we can solve a problem by splitting it into 
                smaller subproblems that can be solved more easily. Once the smaller subproblems 
                have been solved, their solutions can be used to solve the main problem. This presents itself
                as calling the function in its own definition:
                $$\\textup{example here}$$
                This may seem strange at first 
                For instance, 
                in factorials, once we solved for $(n-1)!$, we can easily solve $n!$ by taking $n\\cdot (n-1)!$, 
                or more explicitly, $$\\textup{factorial}(n) = n\\cdot\\textup{factorial}(n-1)$$
                `}
                </Latex>
                We can visualize this process of splitting a problem into simpler problems below:
              </div>
          </div>
          <div className="textbox">
              <h2 className='intro_title'>
                The Base Case
              </h2>
              <div className='intro_content'>
                One important element of recursion is the base case. If we look at the function we wrote above and
                actually tried to run it, it would never stop as shown in the below animation:
                <br></br><br></br>
                To fix this issue, we need to add some sort of check to our original function to let the process stop
                at the right moment.
              </div>
          </div>

        </>
      </AppWrapper>
    </div>
  );
};

export default Intro;
