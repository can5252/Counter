import React from "react";
import '../Style/Reset.css'
import {connect} from 'react-redux'

function Reset(props) {
    const {reset} = props
    return(
        <div className={'reset'}>
            <button onClick={reset} className={'res__button'}>
                {'RESET'}
            </button>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return{
        reset : () => dispatch({
            type: 'RESET',
        })
    }
}

export default connect(null , mapDispatchToProps)(Reset)