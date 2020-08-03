import React from "react";
import '../Style/Count.css';
import {connect} from 'react-redux'

 function Count(props) {
    const { count } = props
    return(
        <div className={'count'}>
            {count}
        </div>
    )
}

function mapStateToProps(state) {
    return{
        count : state.count
    }
}

export default connect(mapStateToProps , null)(Count)