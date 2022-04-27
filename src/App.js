import React, { useState } from "react";
import "./App.css";
import "./puzzle.css";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import img from "./UnessayPuzzle_color.png";
import frontImg from "./UnessayPuzzle_DirectionsFront.jpg";
import backImg from "./UnessayPuzzle_Directions_Back.jpg";

function App() {
	const [text, setText] = useState("Unessay Connection - Connect all the pieces!!");
	
	const set = () => {
		setText("Congratulations!!");
	};
	
	return (
		<>
      <div className="instruction-container">      
        <img src={frontImg} className="instructions-front" alt="front" />
        <img src={backImg} className="instructions-back" alt="front" />
      </div>
			<h2 className="tag">{text}</h2>
			<JigsawPuzzle
				imageSrc={img}
				rows={3}
				columns={3}
				onSolved={set}
				className="jigsaw-puzzle"
			/>
		</>
	);
}

export default App;

