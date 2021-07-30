import React, {useState} from 'react'
import './App.css';
import WholeList from './WholeList';
import styled from 'styled-components'
import todoContext from './listContext';
import {listData} from './mockData'

const AppWrap = styled.div `
`;

function App() {

    const [list, setList] = useState(listData);

    const onCheck = (task) => {
        let newList = list.map(singleTask => {
            if (singleTask.task === task) {
              singleTask.complete = !singleTask.complete
            }
            return singleTask;
        })
        setList(newList)
    }

    const onDelete = (task) => {
        let newList = list.filter(singleTask => singleTask.task !== task);
        setList(newList)
    }

    const onAdd = (task) => {
        setList([...list, task])
    }

    const contextValue = {
        list: list,
        onCheck: onCheck,
        onDelete: onDelete,
        onAdd: onAdd
    }
    
    return (
        <AppWrap>
            <todoContext.Provider value={contextValue}>
                <WholeList/>
            </todoContext.Provider>
        </AppWrap>
    );
}

export default App;
