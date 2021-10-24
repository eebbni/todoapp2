import React from 'react';
import TodoItem from './ToDoItem';
import styled from 'styled-components';

const ListBox = styled.div`
margin-top: 30px;
display: flex;
flex-direction: column;
`;
const ListTitle = styled.p`
font-weight: bold;
margin: 0;
}
`
const List = styled.ul`
list-style: none;
display: flex;
flex-direction: column; 
justify-content: center;
 padding: 0;
`;
const ToDoItemList = ({title,todoList,setTodoList,checkedList}) => {
    return(
        <ListBox>
            <ListTitle>{title}</ListTitle>
            <List>
               {todoList && //todoList가 있을때만 함
                todoList.map((item)=>
                { 
                    //받아온 checkList값에 따라 내용 출력
                    if(checkedList !== item.done) return null;

                    //삭제된 투두는 출력하지 않음
                    if(item.deleted) return null;
                    
                    return (
                        <TodoItem 
                            key={item.id}
                            todoItem={item}
                            todoList={todoList}
                            setTodoList={setTodoList}
                            checked={checkedList}
                        />
                    )
                }
                )}
            </List>
        </ListBox>
    );
}

export default ToDoItemList;