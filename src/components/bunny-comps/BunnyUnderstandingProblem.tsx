import UnderstandingQuestion from '../../assets/bunnies/UnderstandingQuestion.png'
import './StylesBunny.scss'
const UnderstandingProblem = () => {
    return (
        <div className='UnderstandingProblem'> 
            <div className='question'>
                <p>What is the nth number of rabbits? 
                    <input/> 
                </p>
            </div>
            <div className='questionImage'>
                <img src={UnderstandingQuestion} alt="" />
            </div>
            <br/>
            <button className="submitButton"> Submit </button>

        </div>
    )
}
export default UnderstandingProblem