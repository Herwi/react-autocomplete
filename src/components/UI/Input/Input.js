import React, { useEffect, useState } from 'react';
import classes from './Input.module.css';
import initInputState from '../../../helpers/initInputState';
import handlers from '../../../helpers/inputHandlersHelper';
import effects from '../../../helpers/inputEffectsHelper';

// Input component designed to be reusable with any autocomplete array
const Input = ({ type, name, placeholder, autocomplete }) => {
    const [inputValue, setInputValue] = useState(initInputState.value);
    const [focused, setFocused] = useState(initInputState.focused);
    const [currentFocus, setCurrentFocus] = useState(initInputState.currentFocus);
    const [autoCompleteList, setAutoCompleteList] = useState(initInputState.autoCompleteList);

    const onFocusHandler = () => handlers.onFocus(setFocused);
    const onBlurHandler = () => handlers.onBlur(setFocused);
    const onChangeHandler = event => handlers.onChange(event, setInputValue);
    const onAutocompleteEnterKeyHandler = () => handlers.onAutocompleteEnterKey(autoCompleteList, currentFocus, setInputValue);
    const onKeyDownHandler = event => handlers.onKeyDown(event, autoCompleteList, currentFocus, onAutocompleteEnterKeyHandler, setCurrentFocus);

    useEffect(() => {
        effects.filterAutocompleteList(
            autocomplete,
            inputValue,
            setAutoCompleteList
        );
    }, [inputValue, autocomplete])

    useEffect(() => {
        effects.generateJsxCode(
            autoCompleteList,
            classes,
            currentFocus,
            inputValue,
            setAutoCompleteList,
            setCurrentFocus,
            setInputValue
        );
    }, [currentFocus, autoCompleteList.list])

    return (
        <div className={classes.autocomplete}>
            <input
                className={classes.input}
                type={type}
                name={name}
                placeholder={placeholder}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                onChange={onChangeHandler}
                value={inputValue}
                onKeyDown={onKeyDownHandler}
            />
            {focused && autoCompleteList.jsxList}
        </div>
    );
}

export const Submit = () => {
    return <input className={classes.input} type="submit" />
}

export default Input;