import * as React from 'react';
import {useState} from 'react';
import {connect} from 'react-redux';
import { Dispatch } from 'redux';
import { Login as BaseLogin } from '../component/Login';

interface Props {
    
}

const Login = (props: Props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (          
        <BaseLogin/>
    )
}

const mapStateToProps = (store: any) => ({

}) 

const mapDispatchToProps = (dispatch: Dispatch) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Login);