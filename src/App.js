import React, { useState } from "react";
import Board from "./components/Board";
import Drink from "./components/Drink";

const App = () => {

  const [isDrink, setIsDrink] = useState()

	return (
		<div className=" bg-slate-800 w-full min-h-screen justify-center items-center">
			<div className="w-full">
        {isDrink ? <Drink setIsDrink={setIsDrink} /> : <Board setIsDrink={setIsDrink} />}
			</div>
		</div>
	);
};

export default App;
