import { useState, useEffect, useRef } from "react";
//const { useState, useEffect, useRef } = React;

const PetGame = () => {
  const [petName, setPetName] = useState<string>("");
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [formVisible, setFormVisible] = useState(true);

  function handlePetNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPetName(event.target.value)
  }

  function handleSubmitClick(event: React.FormEvent<HTMLFormElement>) {
    // Stop the page refresh default behavior.
    event.preventDefault();

    // Check if the input box is empty.
    if (!nameInputRef.current) {
      return;
    }

    // Process submission.
    const name = nameInputRef.current.value.trim()
    setPetName(name);
    if (name) {
      setFormVisible(false);
    }
  }

  const [hunger, setHunger] = useState<number>(0);
  const [energy, setEnergy] = useState<number>(100);
  const [happiness, setHappiness] = useState<number>(100);

  function handleAction(action: string) {
    if (action == "eat") {
      setHunger(Math.max(hunger-5, 0));
      setEnergy(Math.min(energy+5, 100));
    } else if (action == "play") {
      setHappiness(Math.min(happiness+10, 100));
      setEnergy(Math.max(energy-5, 0));
    } else if (action == "sleep") {
      setHunger(Math.min(hunger+5, 100));
      setEnergy(Math.min(energy+10, 100));
    }
  }

  useEffect(() => {
    if (formVisible) {
      return;
    }
    /*
    const decay = setInterval(() => {
      setHunger(hunger => Math.min(hunger+10, 100));
      setEnergy(energy => Math.min(energy+10, 100));
      setHappiness(happiness => Math.max(happiness-10, 0));
    }, 1000)
    */
    const decay = setTimeout(() => {
      setHunger(100);
      setEnergy(100);
      setHappiness(0);
    }, 1000);
    return () => clearTimeout(decay)
  }, [formVisible])

  enum PetMood {
    HAPPY,
    EXCITED,
    CONTENT,
    SAD,
    TIRED,
    SICK,
    HUNGRY,
  }

  const MoodMapper: Record<PetMood, string> = {
    [PetMood.HAPPY]: "😊",
    [PetMood.EXCITED]: "🤩",
    [PetMood.CONTENT]: "😌",
    [PetMood.SAD]: "😭",
    [PetMood.TIRED]: "🥱",
    [PetMood.SICK]: "🤮",
    [PetMood.HUNGRY]: "😋",
  }

  function handleMood() {
    if (hunger > 70) {
      return MoodMapper[PetMood.HUNGRY];
    } else if (energy < 30) {
      return MoodMapper[PetMood.TIRED];
    } else if (happiness < 30) {
      return MoodMapper[PetMood.SAD];
    } else if (happiness > 80 && energy > 70) {
      return MoodMapper[PetMood.EXCITED];
    } else if (happiness > 60) {
      return MoodMapper[PetMood.HAPPY];
    } else {
      return MoodMapper[PetMood.CONTENT];
    }
  }

  const petMood = handleMood();

  function GameView() {
    return(
      <div className="base-container">
        <h1 className="pet-name">{petName}</h1>
        <h2 className="pet-sprite">{petMood}</h2>
        <div className="stats-grid">
          <h3 className="stat">Hunger<p className="stat-value">{hunger}</p></h3>
          <h3 className="stat">Energy<p className="stat-value">{energy}</p></h3>
          <h3 className="stat">Happiness<p className="stat-value">{happiness}</p></h3>
        </div>
        <div className="pet-buttons">
          <button className="pet-button" id="eat-action" onClick={()=>handleAction("eat")}>Eat</button>
          <button className="pet-button" id="play-action" onClick={()=>handleAction("play")}>Play</button>
          <button className="pet-button" id="sleep-action" onClick={()=>handleAction("sleep")}>Sleep</button>
        </div>
      </div>
    );
  }

  return(
    <div className="game-container">
      {formVisible ? 
      <form className="base-container" onSubmit={handleSubmitClick}>
          <h2>Input Your Pet Name.</h2>
          <input 
            id="pet-name"
            ref={nameInputRef}
            value={petName}
            onChange={handlePetNameChange}
          />
          <button id="set-name-btn" type="submit">Submit</button>
      </form> : <GameView/> 
      }
    </div>
  );
};