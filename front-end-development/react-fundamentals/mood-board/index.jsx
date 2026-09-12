import "./styles.css";

export function MoodBoardItem(props) {
  return(
    <div className="mood-board-item" style={{backgroundColor:props.color}}>
      <img className="mood-board-image" src= {props.image}></img>
      <h3 className="mood-board-text">{props.description}</h3>
    </div>
  );
}

export function MoodBoard() {
  return(
    <div className="mood-board">
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board-grid">
        <MoodBoardItem color="black" image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg" description="placeholder"/>
        <MoodBoardItem color="turquoise" image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg" description="placeholder"/>
        <MoodBoardItem color="beige" image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg" description="placeholder"/>
      </div>
    </div>
  );
}

export default MoodBoard;