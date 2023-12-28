import './App.css';

const icons = {
    rock: '✊',
    paper: '🤚',
    scissors: '✌️'
};

function Player({action = 'rock'}) {
    return (
        <div className="Fightbox">
            {icons[action]}
        </div>
    );
}

function ActionButton({action}) {
    return (
        <button className="Action">
            {icons[action]}
        </button>
    );
}

function App() {
  return (
    <div className="App">
      <div className="Container">
          <h1>ShiFuMi</h1>
          <Player ></Player>
          <Player ></Player>
          <div className="Select">
              <ActionButton action={'rock'} ></ActionButton>
              <ActionButton action={'paper'} ></ActionButton>
              <ActionButton action={'scissors'} ></ActionButton>
          </div>
          <h2 className="Result">
              Player wins
          </h2>
      </div>
    </div>
  );
}

export default App;
