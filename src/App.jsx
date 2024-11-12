import { useState } from "react";
import Questions from "./component/Questions.jsx";
import Congrats from "./component/Congrats.jsx";
import myAudioFile from './component/audios/level-passed-143039.mp3';
import myAudioFile2 from './component/audios/failSound.mp3';
import End from "./component/End.jsx"
import EndAud from "./component/audios/gameEndAud.mp3"

let Riddles = [
  { question: "What has keys but can't open locks?", answer: "keyboard" },
  { question: "What has to be broken before use?", answer: "egg" },
  { question: "David's father has three sons: Snap, Crackle and _____?", answer: "david" },
  { question: "What comes down but never goes up ?", answer: "rain" },
  { question: "If you drop me, I'm sure to crack, but smile at me and I'll smile back. What am I?", answer: "mirror" },
  { question: "What is yours but mostly used by others?", answer: "name" },
  { question: "I don't cry when you cut me, but you do. What am I?", answer: "onion" },
  { question: "What word begins with E, ends with E, but only has one letter?", answer: "envelope" },
  { question: "What gets wet while it's drying?", answer: "towel" },
  { question: "I have a head and a tail, but I don't have a body. What am I?", answer: "coin" },
  { question: "The more you take, the more you leave behind. What am I?", answer: "footsteps" },
  { question: "What goes up and down but doesn't move?", answer: "stairs" },
  { question: "What goes up but never comes down?", answer: "height" },
  { question: "I am an odd number. Take away a letter and I become even. What am I?", answer: "seven" },
  { question: "What is the only word in the dictionary that is spelled wrong?", answer: "wrong" },
  { question: "What starts with T, ends with T, and has T inside it?", answer: "teapot" },
  { question: "Which word becomes shorter when you add 2 letters to it? ", answer: "short" },
  { question: "I have no wings, but I can fly. And I have no eyes, but I can cry. What am I?", answer: "cloud" },
  { question: "Which letter of the alphabet has the most water?", answer: "c" },
  { question: "What is 3/7 chicken, 2/3 cat, and 2/4 goat?", answer: "chicago" },
  { question: "What goes through cities and fields, but never moves?", answer: "road" },

];

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);


  const increaseScore = () => setScore((score) => {
    return score + 10

  });

  const playAudio = () => {
    const audio = new Audio(myAudioFile);
    audio.play();
  };

  const playAudio2 = () => {
    const audio2 = new Audio(myAudioFile2);
    audio2.play();
  };

  const playAudio3 = () => {
    const audio3 = new Audio(EndAud)
    audio3.play();
  }

  const handleAnswerCorrect = () => {
    setIsCorrect(true);
  };

  const handleContinue = () => {

    if (currentQuestionIndex < Riddles.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsCorrect(false);
    } else {
      setGameOver(true)
    }
  };


  const handleBack = () => {
    if (currentQuestionIndex >= 0) {
      setCurrentQuestionIndex(currentQuestionIndex)
      setIsCorrect(false)
      setScore((prevScore) => prevScore - 10)
    }
  }

  if (gameOver) {
    return <div>
      <End endAud={playAudio3} />
    </div>

  }

  if (isCorrect) {
    return <Congrats onContinue={handleContinue}
      onBack={handleBack} />
  }

  else {
    return <Questions
      RiddleQuestion={Riddles[currentQuestionIndex].question}
      RiddleAnswer={Riddles[currentQuestionIndex].answer}
      onAnswerCorrect={handleAnswerCorrect}
      onSubmitAudio={playAudio}
      onWrongAnswerAudio={playAudio2}
      scoreCount={increaseScore}
      score={score}
    />
  }


}
