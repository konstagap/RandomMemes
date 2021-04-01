import {
	GET_MEMES,
	MEMES_FAILURE,
	MEMES_SUCCSESS,
	NEXT_MEME
} from './memesTypes';

export const getMemes = () => ({ type: GET_MEMES });

export const memesFailure = (err) => ({ type: MEMES_FAILURE, payload: err });

export const memesSuccsess = (memes) => ({
	type: MEMES_SUCCSESS,
	payload: memes
});

export const nextMeme = () => ({ type: NEXT_MEME });

const sendMemeRequset = async (dispatch) => {
	try {
		dispatch(getMemes());
		const res = await fetch('https://meme-api.herokuapp.com/gimme/10');
		const data = await res.json();
		if (data) {
			dispatch(memesSuccsess(data));
		} else {
			console.log('data :>> ', data);
			data.mymessage = 'something went wrong';
			dispatch(memesFailure(data));
		}
	} catch (error) {
		error.mymessage = 'this message from catch block blyat';
		dispatch(memesFailure(error));
	}
};

export const fetchMemes = () => {
	return (dispatch, getState) => {
		const { memes: state } = getState();
		const { currentMemeIndex, memes } = state;
		if (currentMemeIndex + 1 < memes.length) {
			dispatch(nextMeme());
		} else {
			sendMemeRequset(dispatch);
		}
	};
};
