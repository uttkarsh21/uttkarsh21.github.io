import React, { useState } from "react";
import "./App.css";
import "./puzzle.css";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import img from "./UnessayPuzzle_color.png";

import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Homepage";
import Page2 from "./components/Page2";
import "./App.css";


class App extends Component {
render() {
  const [text, setText] = useState("Unpuzzle the pieces!!");
	
	const set = () => {
		setText("Congratulations!!");
	};
  return (
    <div>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/page2" component={Page2} />
        </Switch>
        </div>
      </HashRouter>
			<h2 className="tag">{text}</h2>
			<JigsawPuzzle
				imageSrc={img}
				rows={5}
				columns={5}
				onSolved={set}
				className="jigsaw-puzzle"
			/>
    </div>
    );
  }
}
export default App;

