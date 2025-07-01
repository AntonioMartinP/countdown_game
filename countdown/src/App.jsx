import Player from './Components/Player.jsx'
import TimerContainer from './Components/TimerContainer.jsx';
import Timer from './Components/Timer.jsx';

function App() {

  return (
    <>
      <Player />
      <TimerContainer />
      <Timer title="Nivel facil" time="1"></Timer>
      <Timer title="Nivel intermedio" time="5"></Timer>
      <Timer title="Nivel dificil" time="40"></Timer>
      <Timer title="Nivel reto" time="60"></Timer>
      
    </>
  )
}

export default App;
