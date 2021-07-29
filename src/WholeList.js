import React, {useContext} from 'react'
import styled from 'styled-components'
import ListHeading from './ListHeading'
import AddItem from './AddItem'
import ListItem from './ListItem'
import listContext from './listContext'


const ListParent = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    
`;

const ListContainer = styled.div`
    border: solid 2px black;
    height: 75vh;
    width: 50vw;
    margin: auto;
    overflow: auto;
`;

export default function WholeList() {

    const dataContext = useContext(listContext);
    const items = dataContext.list.map(({task, complete}, i) => <ListItem item={task} complete={complete} key={i} id={i}/>)

    return (
    <ListParent>
        <ListContainer>
            <ListHeading/>
            <AddItem />
            {items}
        </ListContainer>
    </ListParent>
    )
}
