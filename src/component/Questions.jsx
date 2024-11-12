import bgImage2 from './images/gameBgimg.jpg';
import { useState } from "react";
import hintImage from "./images/hint.png";
import "./Questions.css";
import QuesBoxImg from "./images/questionBox2.png";
import okayBtn from "./images/okay.png";
import wrongImg from "./images/anim1.gif";

export default function Questions(props) {
  const [userAnswer, setUserAnswer] = useState("");
  const [hintIndex, setHintIndex] = useState(0);
  const [showWrongAnswerGif, setShowWrongAnswerGif] = useState(false);

  const handleSubmit = () => {
    if (userAnswer.toLowerCase() === props.RiddleAnswer.toLowerCase()) {
      props.onSubmitAudio();
      props.onAnswerCorrect();
      props.scoreCount();
    } else {
      props.onWrongAnswerAudio();
      setShowWrongAnswerGif(true);
      setTimeout(() => setShowWrongAnswerGif(false), 2000);
      setUserAnswer("")
    }
  };

  const GiveHint = () => {
    if (hintIndex < props.RiddleAnswer.length) {
      setUserAnswer(props.RiddleAnswer.slice(0, hintIndex + 1));
      setHintIndex(hintIndex + 1);
    }
  };

  return (
    <div
      className="h-screen bg-cover mainDiv grid grid-rows-[15vh_65vh_20vh]"
      style={{ backgroundImage: `url(${bgImage2})` }}
    >
      <div id="scoreBox" className="h-14 mr-5 mb-5 p-2 pl-4 w-[195px] self-end justify-self-end">
        Score - <span className='text-yellow-500'>{props.score}</span>
      </div>

      <div id="QuestionBox_and_input" className="flex flex-row items-center justify-evenly">
        <div
          id="QuestionBox"
          className=" font-normal bg-cover bg-no-repeat bg-center text-[2vw] h-[400px] w-[450px] flex items-center pb-28 pl-16 justify-center text-slate-800 p-4"
          style={{ backgroundImage: `url(${QuesBoxImg})` }}
        >
          {props.RiddleQuestion}
        </div>

        <div className="flex flex-col gap-y-6 h-[300px] w-[400px] place-content-center" id="input_and_btn">
          <input
            className='text-center w-[250px] h-[50px] self-center text-[27px] rounded-[14px]'
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Type your answer here"
            spellCheck="false"
            autoComplete="off"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && userAnswer.length > 0) {
                handleSubmit();
              }
            }}
          />
          <button
            onClick={handleSubmit}
            disabled={userAnswer.length < 1}
            className="transition-transform duration-300 ease-in-out hover:scale-110 h-[50px] w-[145px] self-center rounded-full cursor-pointer bg-cover bg-center"
            style={{ backgroundImage: `url(${okayBtn})` }}
          >
          </button>
        </div>

        {showWrongAnswerGif && (
          <div className="wrong-answer-gif-container">
            <img src={wrongImg} alt="Wrong Answer" className="wrong-answer-gif" />
          </div>
        )}

      </div>

      <div
        hint-notify="Click for Hint"
        onClick={GiveHint}
        id="hintBox"
        className="self-end justify-self-end mr-12 mb-4 h-[80px] w-[80px] bg-slate-300 rounded-full bg-cover bg-center cursor-pointer"
        style={{ backgroundImage: `url(${hintImage})` }}
      />

    </div>
  );
}
