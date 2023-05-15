import NavigateBeforeSharpIcon from '@mui/icons-material/NavigateBeforeSharp';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';
import RestartAltSharpIcon from '@mui/icons-material/RestartAltSharp';
import StopSharpIcon from '@mui/icons-material/StopSharp';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import type * as CSS from 'csstype';
import { useEffect, useState } from 'react';

const slideStyles: CSS.Properties = {
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  marginBottom: '10px',
};

const sliderStyles: CSS.Properties = {
  position: 'relative',
  height: '100%',
};

const ToolbarStyle: CSS.Properties = {
  margin: '0 0 10px',
  textAlign: 'center',
};

const ImageSlider = ({
  slides,
}: {
  slides: { url: string; title: string }[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playState, setPlayState] = useState(false);
  let slideInterval: any;
  const intervalTime = 1000;

  useEffect(() => {
    setCurrentIndex(currentIndex);
  }, []);

  useEffect(() => {
    if (playState) {
      play();
    }
    return () => clearInterval(slideInterval);
  });
  const play = () => {
    slideInterval = setInterval(autoNext, intervalTime);
  };
  const goToPrevious = () => {
    setPlayState(false);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    setPlayState(false);
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const autoNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    if (isLastSlide) {
      setPlayState(false);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const reset = () => {
    setPlayState(false);
    setCurrentIndex(0);
  };
  const beginAutoPlay = () => {
    setPlayState(!playState);
  };

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      <div style={slideStylesWidthBackground}></div>

      <div style={ToolbarStyle}>
        <Box sx={{ '& > :not(style)': { m: 0.75 } }}>
          <Fab
            color="primary"
            aria-label="previous"
            onClick={goToPrevious}
            size="small"
          >
            <NavigateBeforeSharpIcon />
          </Fab>
          <Fab
            color="primary"
            aria-label="next"
            onClick={goToNext}
            size="small"
          >
            <NavigateNextIcon />
          </Fab>
          {playState ? (
            <Fab
              color="secondary"
              aria-label="pause"
              size="small"
              onClick={beginAutoPlay}
            >
              <StopSharpIcon />
            </Fab>
          ) : (
            <Fab
              color="primary"
              aria-label="play"
              size="small"
              onClick={beginAutoPlay}
            >
              <PlayArrowSharpIcon />
            </Fab>
          )}

          <Fab
            color="primary"
            aria-label="restart"
            size="small"
            onClick={reset}
            disabled={currentIndex === 0}
          >
            <RestartAltSharpIcon />
          </Fab>
        </Box>
      </div>
    </div>
  );
};

export default ImageSlider;
