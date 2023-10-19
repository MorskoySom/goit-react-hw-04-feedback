import React from "react";
import style from "./Statistics.module.css";

export const Statistics = ({ good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage }) => {

    return (
        <div>
            <p className={style.text}>Good : {good}</p>
            <p className={style.text}>Neutral : {neutral}</p>
            <p className={style.text}>Bad : {bad}</p>
            <p className={style.text}>Total : {countTotalFeedback()}</p>
            <p className={style.text}>Percentage : {countPositiveFeedbackPercentage()} %</p>
        </div>
    );
}

