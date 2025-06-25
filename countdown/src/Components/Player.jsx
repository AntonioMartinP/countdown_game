import { use, useState, useRef } from 'react';

const Player = () => {
    const inputName = useRef(null);

    const [playerName, setPlayerName] = useState(null);
    const [buttonClicked, setButtonClicked] = useState(false);
   
    const handleButtonClicked = () => {
        setButtonClicked(true);
        setPlayerName(inputName.current.value);
        console.log(inputName.current.value);

    }
    return (
        <>
            <section className="text-center mt-6">
                <h2 className="text-[#913131] mb-5 font-bold text-xl">
                    Bienvenido al juego, {playerName??"¿Quien eres?"}
                </h2>
                <h2 className="text-[#913131] mb-5 font-bold text-xl">
                    Bienvenido al juego, {buttonClicked ? playerName : "¿Quien eres?"}
                </h2>

                <p className='flex justify-center items-center'>

                <input ref={inputName} type="text" className='rounded-s-md border-[1.5px] border-solid border-[#3F2121]
                 bg-[#3f21218f] p-1 pl-3 text-[#d1f0ec] focus:outline-none'
                        
                    />
                <button className="rounded-e-md font-bold cursor-pointer border-[1.5px]
                 border-solid border-[#3f2121] bg-[#691a1a] px-4 py-[0.25rem] text-[#f2f2f2] hover:bg-[#3c8379] hover-[#3c8379]"
                        onClick={() => { handleButtonClicked() }
                        }
                    >
                        Introduce tu nombre:
                    </button>
                </p>
            </section>

        </>
    )

}

export default Player;