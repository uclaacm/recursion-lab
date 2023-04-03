import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { FC, useState } from 'react';
import AppWrapper from '../components/shared/AppWrapper';
import Button from '../components/shared/Button';
import { HeaderSections } from '../components/shared/globalTypes';
import './Problem4.scss';

const Problem4: FC = () => {
  const [selected, setSelected] = useState(-1);

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(-1);
    }
    setSelected(i);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const [highlighted, setHighlighted] = useState(0);
  const [passedIntro, setPassedIntro] = useState(false);
  return (
    <div>
      <AppWrapper section={HeaderSections.PROBLEM4_TITLE}>
        <div className="body">
          <div className="content-container">
            <p className="setup">Binary Search</p>

            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={2}
                padding="10px"
                justifyContent="center"
              >
                {highlighted < 5 && (
                  <>
                    <Grid item xs={6}>
                      <Item
                        className={highlighted === 1 ? 'highlight' : undefined}
                      >
                        1
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item
                        className={highlighted === 3 ? 'highlight' : undefined}
                      >
                        3
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item
                        className={highlighted === 2 ? 'highlight' : undefined}
                      >
                        2
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item
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
                        className={highlighted === 5 ? 'highlight' : undefined}
                      >
                        5
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item>7</Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item>6</Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item>8</Item>
                    </Grid>
                  </>
                )}
              </Grid>
            </Box>

            {/* need to highlight the overall box like in the code example
  need to replace nuumbers with words from array
  need to replace text box to showing the right word
  */}

            {highlighted > 0 && !passedIntro && (
              <p style={{ padding: '10px' }}>X is greater than Y</p>
            )}

            <button
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
              <div className="wrapper">
                <div className="accordion">
                  {data.map((item, i) => (
                    <div key={i} className="item">
                      <div className="title" onClick={() => toggle(i)}>
                        <h2>{item.step}</h2>
                        <span>{selected === i ? '-' : '+'}</span>
                      </div>
                      <div
                        className={selected === i ? 'content show' : 'content'}
                      >
                        {item.answer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="buttons">
              <Button
                icon={faLessThan}
                className="prev-btn"
                navigation="/problem3"
              />
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

const data = [
  {
    step: 'step 1',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    step: 'step 2',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    step: 'step 3',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    step: 'step 4',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export default Problem4;
/*
            <Button
              icon="Prev"
              className="prev-button"
              navigation="/problem3"
            />
            <Button icon="Next" className="next-button" navigation="/" />
*/
