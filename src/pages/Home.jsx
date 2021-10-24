import React , {useState} from 'react';
import {InputBox} from '../components/InputBox';
import TodoItemList from '../components/ToDoItemList';
import styled from 'styled-components';

const Homepage = styled.div`
    min-width : 480px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`;

const Home = () => {
    const [todoList, setTodoList] = useState([]);

    return (
        <Homepage>
            {/*투두 추가하는 인풋박스 */}
            <InputBox todoList={todoList} setTodoList={setTodoList}/>
             {/* 할일 목록 출력하는 리스트 
             각각의 title,todoList는 props임*/}
            <TodoItemList 
            title={'할 일'}
            todoList={todoList}
            setTodoList={setTodoList}
            checkedList={false}/>
            {/* 완료 목록 출력하는 리스트 */}
            <TodoItemList 
            title={'완료한 일'}
            todoList={todoList}
            setTodoList={setTodoList}
            checkedList={true}/>
        </Homepage>
    );
}

export default Home;