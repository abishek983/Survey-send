//allows user to review the survey and send the survey
import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from "react-router";
import formFields from './formFIelds';
import * as actions from '../../actions';


function SurveyFormReview({ onCancel , formValues , submitSurvey , history}) {
    const reviewField = _.map(formFields , ({name , label}) => {
        return (
            <div key={name}>
                <label>{label}</label>
                    <div>
                        {formValues[name]}
                    </div>
            </div>
        )
    })
    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewField}
            <button
                className="yellow white-text darken-3 btn-flat" onClick={onCancel}>
                    Back
            </button>
            <button className="green btn-flat right white-text" onClick={() => submitSurvey(formValues , history)}>
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    )
}

function mapStateToProps(state){
    // console.log(state);
    return{ formValues : state.form.surveyForm.values};
}

export default connect(mapStateToProps , actions)(withRouter(SurveyFormReview));