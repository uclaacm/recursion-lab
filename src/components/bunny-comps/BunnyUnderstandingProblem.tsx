import { useState } from 'react';
import './StylesBunny.scss';
import arrowRabbit from '../../assets/bunnies/arrowRabbit.png';
import rabbitGroup2 from '../../assets/bunnies/rabbitgroup2.png';
import rabbitGroup3 from '../../assets/bunnies/rabbitgroup3.png';
import rabbitGroup5 from '../../assets/bunnies/rabbitgroup5.png';
import rabbitGroup8 from '../../assets/bunnies/rabbitgroup8.png';

function UnderstandingProblem(): JSX.Element {

  const [currentImage, setCurrentImage] = useState(0);
  const images = [rabbitGroup2, rabbitGroup3, rabbitGroup5, rabbitGroup8];
  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const renderedImages = images.slice(0, currentImage + 1);

  return (
    <div className='understanding-problem'>
      Keep clicking next to see the number of rabbits increasing through time!
      <br/><br/>
      <button onClick={nextImage} className='next-button'>Next</button>
      <div className='container'>
        {renderedImages.map((image, index) => (
          <div className='box' key={index}>
            <img className="rabit-group"  src={image} alt=""/>
            {index !== renderedImages.length - 1 && (
              <img className="arrow-rabbit" src={arrowRabbit} alt="" />
            )}
          </div>

        ))}
      </div>
    </div>
  );
}

export default UnderstandingProblem;