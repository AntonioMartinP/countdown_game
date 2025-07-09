import { useRef, useState } from "react";
import ModalDialog from "./ModalDialog";


const Timer = ({ title, time }) => {

  const initialTime = time * 1000;
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  const timer = useRef();
  const dialogModal = useRef();

  const timeIsRunning = timeRemaining >= 0 && timeRemaining < initialTime;
  
  console.log(timeIsRunning, timeRemaining, initialTime);
  console.log(`diferencia= ${initialTime - timeRemaining}`);
    


  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    setTimeRemaining(initialTime);
    dialogModal.current.open();
  }

  const onResetTimeRemaining = () => {
    setTimeRemaining(initialTime);
  }

  const handleStartTime = () => {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 100);
    }, 100)

  }

  const handleStopTime = () => {
    clearInterval(timer.current);
    dialogModal.current.open();
  }

  return (
    <>
      <ModalDialog ref={dialogModal} timeRemaining={timeRemaining} timeTarget={time} onResetTimeRemaining={onResetTimeRemaining} />
      <section
        className='w-[22rem] flex flex-col items-center justify-center p-8 m-8 
            bg-[#691A1A] text-[##221c18] shadow-lg rounded-md'>
        <h2 className='text-xl tracking-wide text-center uppercase text-[#edfcfa] font-bold mb-2'>
          {title}
        </h2>
        <p className='border-[1px] border-solid border-[#46cebe] rounded px-2 py-1 m-'>
          {time} segundo{time > 1 ? 's' : ''}
        </p>
        <p
          className='mt-4 px-4 py-2 border-none rounded-md bg-[#12352f] text-[#edfcfa] 
        text-lg cursor-pointer hover:bg-[#051715]'>
          <button onClick={timeIsRunning ? handleStopTime : handleStartTime}>
            {timeIsRunning ? 'Parar' : 'Empezar'}
          </button>
        </p>
        <p className=''></p>
      </section>
    </>
  );
}

export default Timer;