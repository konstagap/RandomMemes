import {
	GET_MEMES,
	MEMES_FAILURE,
	MEMES_SUCCSESS,
	NEXT_MEME
} from './memesTypes';

const intialState = {
	error: {},
	isLoading: false,
	memes: [],
	currentMemeIndex: 0
};

export const memesReducer = (state = intialState, action) => {
	switch (action.type) {
		case GET_MEMES: {
			return { ...state, isLoading: true, error: {}, currentMemeIndex: 0 };
		}
		case MEMES_FAILURE: {
			return { ...state, isLoading: false, error: action.payload };
		}
		case MEMES_SUCCSESS: {
			return { ...state, isLoading: false, memes: action.payload.memes };
		}
		case NEXT_MEME: {
			console.log('state.currentMemeIndex :>> ', state.currentMemeIndex);
			return { ...state, currentMemeIndex: state.currentMemeIndex + 1 };
		}
		default:
			return state;
	}
};
