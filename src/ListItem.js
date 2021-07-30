import React, {useContext} from 'react'
import styled from 'styled-components'
import listContext from './listContext'

const Wrap = styled.div `
`;

const CheckButton = styled.button `

`

const DeleteButton = styled.button `
    margin-left: 2px;
`

const FlexContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: black 2px solid;
    border-radius: 3px;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5px;
    
`

const TodoItem = styled.div `
font-size: 24px;
margin-left: 10px;
`

const ButtonContainer = styled.div `
    margin-right: 5px;
`

export default function ListItem(props) {

    const {onCheck, onDelete} = useContext(listContext)
    const {item} = props;

    return (
        <Wrap>
            <FlexContainer>
                <TodoItem style={props.complete ? {textDecoration: "line-through"} : {textDecoration: "none"}}>
                    {item}
                </TodoItem>
                <ButtonContainer>
                    <CheckButton onClick={() => onCheck(item)}>
                        {!props.complete && "Done"}
                        {props.complete && "Undo"}
                    </CheckButton>
                    <DeleteButton onClick={()=> onDelete(item)}>
                        Delete
                    </DeleteButton>
                </ButtonContainer>
            </FlexContainer>
        </Wrap>
    )
}
