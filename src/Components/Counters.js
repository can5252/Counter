import React from "react";
import Increase from "./Increase";
import Decrease from "./Decrease";
import Reset from "./Reset";
import '../Style/Counters.css';

export default function Counters() {
    return(
        <div className={'counters'}>
            <div className={'buttons'}>
                <Increase/>
                <Reset/>
                <Decrease/>
            </div>
        </div>
    )
}