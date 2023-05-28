import { useState } from 'react';
import './StylesBunny.scss';
import rabbitGroup2 from '../../assets/bunnies/rabbitgroup2.png';
import rabbitGroup3 from '../../assets/bunnies/rabbitgroup3.png';
import rabbitGroup5 from '../../assets/bunnies/rabbitgroup5.png';
import rabbitGroup8 from '../../assets/bunnies/rabbitgroup8.png';
import arrowRabbit from '../../assets/bunnies/arrowRabbit.png';

function UnderstandingProblem(): JSX.Element {
  
  const [currentImage, setCurrentImage] = useState(0);
  const images = [rabbitGroup2, rabbitGroup3, rabbitGroup5, rabbitGroup8];
  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const renderedImages = images.slice(0, currentImage + 1)

  return (
    <div className='understanding-problem'>
      Keep clicking next to see the number of rabbits increasing through time!
      <br/><br/>
      <button onClick={nextImage} className='next-button'>Next</button>
      <div className='container'>
        {renderedImages.map((image, index) => (
          <div className='box'>
            <img className="rabit-group" key={index} src={image} alt=""/>
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


// import UnderstandingQuestion from '../../assets/bunnies/UnderstandingQuestion.png';

// import KhanCard from '../shared/KhanCard';
// import KhanInput from '../shared/KhanInput';

// const [isCorrect, setIsCorrect] = useState([false]);
  // const [answerKey] = useState({
  //   //you can have multiple "Fill in the Blank" questions
  //   question1: '8',
  // });


  // <KhanCard
    //   correct="This is an explanation for when you get the answer correct." //explanation for when user gets answer correct
    //   incorrect="This is a hint for when you get the answer incorrect." //hint when user gets answer incorrect
    //   correct_answer={isCorrect} //must pass in correctness state from parent
    //   index={[0]} //index for what KhanCard you are referring to
    // >
    //   <div className="understanding-problem">
    //     <div className="question">
    //       <p>
    //         What is the nth number of rabbits?
    //         <KhanInput
    //           correct_answer={isCorrect} //must pass in correctness state from parent
    //           index={0} //index for what KhanCard you are referring to
    //           answer={answerKey.question1} //the answer from answerkey
    //           update_answer={setIsCorrect}
    //         />
    //       </p>
    //     </div>
    //     <div className="questionImage">
    //       <img src={UnderstandingQuestion} alt="" style={{ width: '100%' }} />
    //     </div>
    //   </div>
    // </KhanCard>