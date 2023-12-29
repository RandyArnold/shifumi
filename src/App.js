import './App.css';
import {useState} from "react";

const icons = {
    rock: '✊',
    paper: '🤚',
    scissors: '✌️'
};

const botNames  = [
    'Randy',
    'Ilan',
    'Maxime',
    'Agathe',
    'Joan',
    'Alison'
];

const botName = botNames[Math.floor(Math.random()*botNames.length)];

function randomBotAction(): String
{
    const actions = ['rock', 'paper', 'scissors'];

    return actions[Math.floor(Math.random()*actions.length)];
}

function Player({action = 'rock', score = 0, name = 'You', bot = false}) {
    return (
        <div className="Fightbox">
            { bot &&  <span className="PlayerName">BOT {name}: 0</span> }
            <div className="ActionIcon" id={bot ? 'botAction' : 'playerAction'}>
                {icons[action]}
            </div>
            { !bot &&  <span className="PlayerName">{name}: 0</span> }
        </div>
    );
}

function ActionButton({action, onActionSelected}) {
    return (
        <button className="Action" onClick={() => onActionSelected(action)}>
            {icons[action]}
        </button>
    );
}

function App() {
    const [playerAction, setPlayerAction] = useState("");
    const [botAction, setBotAction] = useState("");

    const onActionSelected = (selectedAction) => {
        setPlayerAction(selectedAction);
        setBotAction(randomBotAction());
    };



    return (
    <div className="App">
      <div className="Container">
          <h1>ShiFuMi</h1>
          <Player action={botAction || 'rock'} bot={true} name={botName}></Player>
          <Player action={playerAction || 'rock'}></Player>
          <div className="Select">
              <ActionButton action={'rock'} onActionSelected={onActionSelected}></ActionButton>
              <ActionButton action={'paper'} onActionSelected={onActionSelected}></ActionButton>
              <ActionButton action={'scissors'} onActionSelected={onActionSelected}></ActionButton>
          </div>
      </div>
    </div>
    );
}

export default App;
