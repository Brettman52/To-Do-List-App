import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import listContext from './listContext'
import Error from './Error'

const Wrap = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
`;

const AddBar = styled.input `
   
`

const AddButton = styled.button `
   
`
const AddForm = styled.form `

`
export default function AddItem() {


    const [input, setInputState] = useState();
    const [touched, setTouched] = useState(false);
    const [error, setError] = useState(null);

    const dataContext = useContext(listContext);

    const trackLengthError = input => {
        if (touched && input.length < 2) {
            setError("The task name must have at least two characters!")
        } else {
            setError(null)
        }
    }

    const trackDuplicateError = input => {
        dataContext
            .list
            .forEach(singleTask => {
                if (singleTask.task.toLowerCase() === input.toLowerCase()) {
                    setError(`"${input}" is already on your list!`)
                }
            })
    }
   
    const trackChanges = input => {
        setInputState(input);
        setTouched(true)
        trackLengthError(input)
        trackDuplicateError(input)
    }

    const onSubmit = e => {
        setTouched(false)
        e.preventDefault();
        dataContext.onAdd({task: input, complete: false})
        setInputState()
        e.target.reset();
    }

    return (

        <Wrap>
            <AddForm onSubmit={onSubmit}>
                <AddBar
                    
                    onChange={(e) => trackChanges(e.target.value)}
                    placeholder="Add Task"/>
                <AddButton disabled={!input || error || input.length < 2}>
                    Add
                </AddButton>
            </AddForm>
            <Error msg={error}/>
        </Wrap>
    )
}
