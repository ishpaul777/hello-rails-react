import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGreeting } from "./redux/greetingsDux";

function Greeting() {
	const greetings = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(getGreeting());
	}, []);
	
  return (
    <div>
      <h1>{greetings}</h1>
			<button onClick={
				() => {
					dispatch(getGreeting());
				}
			}>
				Get Greeting
			</button>
    </div>
  );
}

export default Greeting;
