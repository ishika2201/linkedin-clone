import React from 'react';
import "./Widgets.css";

import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import ArrowRightTwoToneIcon from '@material-ui/icons/ArrowRightTwoTone';
function Widgets() {
    const newsArticle = (heading, subtitle)=> (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <ArrowRightTwoToneIcon/>
            </div>
            <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>

            </div>

        </div>
    );
    return (
    <div className="widgets">
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoTwoToneIcon />
        </div>

        {newsArticle("Yash Loser Max", "#nowaterpottieday")}
        {newsArticle("Ishika Winner Max", "#prodancer")}
        {newsArticle("Sonny sangu", "#preeecooooo")}
    </div>

     
  );
}

export default Widgets;