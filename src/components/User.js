import React, { useEffect }  from 'react';
import * as userThunks from '../redux/thunks/userThunks'
import { connect } from 'react-redux'

const mapDispatchToProps = {
    ...userThunks
}
const mapStateToProps = (state, currentProps) => ({
    userData: state.apiData.user
})

const User = (props) => {
    useEffect(() => {
        props.getUserDetails()
    }, []);

    return (
        <div className="user">
            <h1>User</h1>
            <div>
                <p>User Name: {props.userData.name}</p>
                <p>Email: {props.userData.email}</p>
                <p>Phone: {props.userData.phone}</p>                
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
