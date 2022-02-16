import React from 'react';
import { useSelector } from 'react-redux';
import Input, { Submit } from '../UI/Input/Input';

const Form = props => {
    const usernames = useSelector(state => state.usernames);

    return (
        <form autoComplete="off" action="">
            <Input
                type="text"
                name="username"
                placeholder="Username"
                autocomplete={usernames}
            />
            <Submit />
        </form>
    )
}

export default Form;