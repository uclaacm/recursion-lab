import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { FC, useState } from 'react';
import BookShelf from '../assets/books.png';
import OpenBook from '../assets/open-book.png';
import ProgressBar4 from '../assets/progress_bar4.png';
import BinaryBaseCase from '../components/binary-comps/BinaryBaseCase';
import BinaryCode from '../components/binary-comps/BinaryCode';
import BinaryFormula from '../components/binary-comps/BinaryFormula';
import BinaryUnderstandPart1 from '../components/binary-comps/BinaryUnderstandPart1';
import BinaryUnderstandPart2 from '../components/binary-comps/BinaryUnderstandPart2';
import AppWrapper from '../components/shared/AppWrapper';
import Button from '../components/shared/Button';
import ExpandBox from '../components/shared/ExpandBox';
import { HeaderSections } from '../components/shared/globalTypes';
import './Problem4.scss';

const Problem4: FC = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const [highlighted, setHighlighted] = useState(1);
  const [passedIntro, setPassedIntro] = useState(false);
  return (
    <div>
      <AppWrapper section={HeaderSections.PROBLEM4_TITLE}>
        <div className="body">
          <div
            className="content-container"
            style={{
              backgroundImage: `url(${BookShelf})`,
            }}
          >
            <img src={OpenBook} className="open-book"></img>

            <Box sx={{ flexGrow: 1 }} className="number-list">
              <Grid container spacing={2} justifyContent="center">
                {highlighted < 5 && (
                  <>
                    <Grid item xs={6}>
                      <Item
                        style={{ background: 'transparent', boxShadow: 'none' }}
                        className={highlighted === 1 ? 'highlight' : undefined}
                      >
                        1
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item
                        style={{ background: 'transparent', boxShadow: 'none' }}
                        className={highlighted === 3 ? 'highlight' : undefined}
                      >
                        3
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item
                        style={{ background: 'transparent', boxShadow: 'none' }}
                        className={highlighted === 2 ? 'highlight' : undefined}
                      >
                        2
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item
                        style={{ background: 'transparent', boxShadow: 'none' }}
                        className={highlighted === 4 ? 'highlight' : undefined}
                      >
                        4
                      </Item>
                    </Grid>
                  </>
                )}
                {highlighted > 4 && (
                  <>
                    <Grid item xs={6}>
                      <Item
                        style={{ background: 'transparent', boxShadow: 'none' }}
                        className={highlighted === 5 ? 'highlight' : undefined}
                      >
                        5
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item
                        style={{ background: 'transparent', boxShadow: 'none' }}
                      >
                        7
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item
                        style={{ background: 'transparent', boxShadow: 'none' }}
                      >
                        6
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item
                        style={{ background: 'transparent', boxShadow: 'none' }}
                      >
                        8
                      </Item>
                    </Grid>
                  </>
                )}
              </Grid>
            </Box>

            {/* need to highlight the overall box like in the code example
              need to replace nuumbers with words from array
              need to replace text box to showing the right word
              */}

            <div className="problem-body">
              {highlighted > 0 && (
                <p style={{ padding: '10px' }}>X is greater than Y</p>
              )}

              <button
                style={{ margin: '10px' }}
                onClick={() => {
                  setHighlighted(highlighted + 1);
                }}
              >
                Next
              </button>
              {highlighted > 5 && (
                <div>
                  <h2> {'Too slow? Learn Binary Search'} </h2>
                  <button
                    style={{ margin: '10px' }}
                    onClick={() => {
                      setPassedIntro(true);
                    }}
                  >
                    Go!
                  </button>
                </div>
              )}
              {passedIntro && (
                <>
                  <ExpandBox
                    class="binary-title"
                    title="Understanding the Problem Part 1"
                    component={BinaryUnderstandPart1}
                    icon={AutoStoriesIcon}
                  />
                  <ExpandBox
                    class="binary-title"
                    title="Identifying the Base Case Part 1"
                    component={BinaryBaseCase}
                    icon={AutoStoriesIcon}
                  />
                  <ExpandBox
                    class="binary-title"
                    title="Understanding the Problem Part 2"
                    component={BinaryUnderstandPart2}
                    icon={AutoStoriesIcon}
                  />
                  <ExpandBox
                    class="binary-title"
                    title="Identifying the Base Case Part 2"
                    component={BinaryBaseCase}
                    icon={AutoStoriesIcon}
                  />
                  <ExpandBox
                    class="binary-title"
                    title="Generalize the Pattern: Recursive Formula"
                    component={BinaryFormula}
                    icon={AutoStoriesIcon}
                  />
                  <ExpandBox
                    class="binary-title"
                    title="Code the Components Together"
                    component={BinaryCode}
                    icon={AutoStoriesIcon}
                  />
                </>
              )}
            </div>

            <div id="bottom-bar">
              <Button
                icon={faLessThan}
                className="prev-btn"
                navigation="/problem3"
              />
              <div className="progress-bar4">
                <img
                  src={ProgressBar4}
                  alt="Progress Bar: You are on the Fourth Problem!"
                />
              </div>
              <Button
                icon={faGreaterThan}
                className="next-btn"
                navigation="/"
              />
            </div>
          </div>
        </div>
      </AppWrapper>
    </div>
  );
};

export default Problem4;
