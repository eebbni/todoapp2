import React, {useState,useRef,useEffect} from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const Inputbox = styled.div`
width: 100%;
display: flex;
align-items: center;
`;
const Inputbox_inp = styled.input`
flex: 1; 
border: none; 
border-bottom: 1px solid #f1f3f5; 
padding: 10px; 
height: 50px; 
box-sizing: border-box;
`;
const Btn = styled.button`
border: none; 
border-radius: 0; 
background-color: #d0ebff; 
color: #1c7ed6; 
height: 50px; 
width: 50px; 
font-weight: bold;
&:hover {
    cursor: pointer;
    background-color: #1f9dfa;
  }
`;

export const InputBox = ({todoList,setTodoList}) => {
    const [text,setText] = useState('');
    const inputRef = useRef(null);

    //정상동작 확인(todoList에 대해서)
    useEffect(() => {
        console.log(todoList);
    },[todoList])

    const onChangeHandler = (e) => {
        setText(e.target.value);
    }

    const onClickBtn = () => {
        if(!text)
        {
            alert('값을 다시 입력해주세요');
            return false;
        }
        const nextTodoList = todoList.concat({
            id: todoList.length,
            text : text,
            done : false,
            deleted : false
        })
        setTodoList(nextTodoList);

        //input값 초기화
        setText('');
        inputRef.current.focus(); //클릭 후 포커싱
    }

    return (
    <Inputbox>
       <Inputbox_inp
        type="text"
        name="todoInput"
        placeholder="할일을 입력하세요"
        ref={inputRef}
        className="inputbox_input"
        onChange={onChangeHandler}
        value={text}
        />
        <Btn onClick={onClickBtn} type="submit">추가</Btn>
    </Inputbox>
    );
}
