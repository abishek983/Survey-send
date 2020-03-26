import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
        const res = await axios.get('/api/current_user')
        dispatch({type : FETCH_USER , payload : res.data})
};


export const submitSurvey = (values,history) => async(dispatch) =>{
        // console.log(values);
        const res =await fetch('/api/surveys', {
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body : JSON.stringify(values)});
        history.push('/surveys');        
        dispatch({type : FETCH_USER, payload : res.data})
}