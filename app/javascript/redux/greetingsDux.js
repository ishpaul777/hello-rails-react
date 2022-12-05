const GET_GREETING = "GET_GREETING";

export default function greetingsReducer(state="hello Word", action) {
	switch (action.type) {
		case GET_GREETING:{
			return action.payload;
		}
		default:
			return state;
	}
}

export function getGreeting() {
	return async (dispatch) => {
		const response = await fetch("/api/v1/greetings/random");
		const data = await response.json();
		dispatch({
			type: GET_GREETING,
			payload: data.message,
		});
	};
}
