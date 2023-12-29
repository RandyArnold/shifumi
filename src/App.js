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

function newScore(playerAction, botAction, playerScore, botScore)
{
    // key beats value
    const gameLogic = {
        'rock': 'scissors',
        'scissors': 'paper',
        'paper': 'rock'
    };

    if (gameLogic[playerAction] === botAction) playerScore++;
    if (gameLogic[botAction] === playerAction) botScore++;

    return {playerScore: playerScore, botScore: botScore};
}

function Player({action = 'rock', score, name = 'You', bot = false}) {
    return (
        <div className="Fightbox">
            { bot &&  <span className="PlayerName">BOT {name}: {score}</span> }
            <div className="ActionIcon" id={bot ? 'botAction' : 'playerAction'}>
                {icons[action]}
            </div>
            { !bot &&  <span className="PlayerName">{name}: {score}</span> }
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
    const [playerAction, setPlayerAction] = useState("rock");
    const [botAction, setBotAction] = useState("rock");
    const [playerScore, setPlayerScore] = useState(0);
    const [botScore, setBotScore] = useState(0);

    const onActionSelected = (selectedAction) => {
        setPlayerAction(selectedAction);
        const botAction = randomBotAction();
        setBotAction(botAction);

        const score = newScore(selectedAction, botAction, playerScore, botScore);
        setPlayerScore(score.playerScore);
        setBotScore(score.botScore);
    };



    return (
    <div className="App">
      <div className="Container">
          <h1>ShiFuMi</h1>
          <Player action={botAction} score={botScore} bot={true} name={botName}></Player>
          <Player action={playerAction} score={playerScore}></Player>
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
