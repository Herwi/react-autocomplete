// input focus
const onFocus = (setFocused) => setFocused(true);

// input blur
// little walkaround because onClick in autocomplete-list was triggering after onBlurHandler
// that caused input not filling with the value of clicked item on lsit
const onBlur = (setFocused) => setTimeout(() => {
    setFocused(false); 
}, 250);

// on input value change
const onChange = (event, setInputValue) => setInputValue(event.target.value);

// on enter press while input active
const onAutocompleteEnterKey = (autoCompleteList, currentFocus, setInputValue) => {
    if(currentFocus > -1) {
        setInputValue(autoCompleteList.list[currentFocus]);
    }
};

// keyDown event while input focused
const onKeyDown = (event, autoCompleteList, currentFocus, onAutocompleteEnterKeyHandler, setCurrentFocus) => {
    if (event.keyCode === 40) {
        setCurrentFocus(prevState => Math.min(prevState + 1, autoCompleteList.list.length));
    }
    else if (event.keyCode === 38) {
        setCurrentFocus(prevState => Math.max(prevState - 1, -1));
    }
    else if (event.keyCode === 13) {
        if(currentFocus > -1) {
            event.preventDefault();
            onAutocompleteEnterKeyHandler();
        }
    }
};

export default {
    onFocus,
    onBlur,
    onChange,
    onAutocompleteEnterKey,
    onKeyDown
}