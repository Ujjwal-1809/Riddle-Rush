import bgImage from './images/wow.png';
import MainbgImage from './images/comicbg-3.jpg';
import nextBtn from "./images/nextBtn.png"
import backBtn from "./images/backBtn.png"

export default function Congrats(props) {
  return (
    <div
      id='congratsMainDiv'
      className=" bg-slate-400 h-screen flex justify-center flex-col items-center bg-center bg-cover"
      style={{ backgroundImage: `url(${MainbgImage})` }}>
      <div id='wow' className=" h-[440px] w-[440px] bg-contain bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}></div>

      <div id='next_and_back' className='flex gap-x-12'>
        <img id='back' onClick={props.onBack} className=' transition-transform duration-300 ease-in-out hover:scale-110 mb-14 h-20 w-20 cursor-pointer' src={backBtn} />
        <img id='next' onClick={props.onContinue} className=' transition-transform duration-300 ease-in-out hover:scale-110 h-[77px] w-[77px] cursor-pointer' src={nextBtn} />
      </div>

    </div>

  );
}
