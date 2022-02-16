import React from 'react';
import initInputState from './initInputState';

// effect to generate list of items containing input value
const filterAutocompleteList = (autocomplete, inputValue, setAutoCompleteList) => {
    if (autocomplete.length > 0 && inputValue && inputValue.length > 0) {
        const filtered = autocomplete.filter(a => {
            if(a.substr(0, inputValue.length).toUpperCase() === inputValue.toUpperCase() && a !== inputValue) {
                return true;
            }
            return false;
        });
        setAutoCompleteList(prevState => {
            return { ...prevState, list: [...filtered] };
        });
    }
    else {
        setAutoCompleteList(initInputState.autoCompleteList);
    }
};

// generation of jsx code from items list containing input value
const generateJsxCode = (autoCompleteList, classes, currentFocus, inputValue, setAutoCompleteList, setCurrentFocus, setInputValue) => {
    if (autoCompleteList.list.length === 0 || inputValue.length === 0) {
        setAutoCompleteList(prevState => {
            return { ...prevState, jsxList: null }
        });
    }
    else {
        setAutoCompleteList(prevState => {
            if (prevState.jsxList === null) {
                setCurrentFocus(-1);
            }
            return {
                ...prevState,
                jsxList:
                    <div className={classes["autocomplete-items"]}>
                        {prevState.list.map((v, i) => {
                            return (
                                <div
                                    key={`ac_${i}`}
                                    onClick={() => setInputValue(v)}
                                    className={i === currentFocus ? classes["autocomplete-active"] : ""}
                                >
                                    <strong>{v.substr(0, inputValue.length)}</strong>
                                    {v.substr(inputValue.length)}
                                    <input className={classes.input} type="hidden" value={v} />
                                </div>
                            );
                        })}
                    </div>
            }
        })
    }
};

export default {
    filterAutocompleteList,
    generateJsxCode
}