import React, { useEffect , useState , useRef} from 'react';
import styled from 'styled-components';

const ItemBox = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    height: 36px;
`;
const ItemName = styled.span`
    flex: 1;
    ${({chk}) => {
        return chk === true ? 
        'font-style: italic; text-decoration: line-through; color: #868e96;'
        : null;
    }}
`;
const CheckBox = styled.input`
    margin-right: 10px;
`;
const EditBtn = styled.button`
    border: none; 

    border-radius: 0; 
    height: 36px; 
    width: 36px; 
    margin-right: 3px;
    background-color: inherit;
    &:hover {
        cursor: pointer;
        background-color: #d0ebff;
      }
`;
const DelBtn = styled.button`
    border: none; 
    border-radius: 0; 
    height: 36px; 
    width: 36px; 
    background-color: inherit;
    &:hover {
        cursor: pointer;
        background-color: #d0ebff;
      }
`;
const EditInput = styled.input`
flex: 1; 
border: none; 
border-bottom: 1px solid #f1f3f5; 
padding: 5px; 
font-size: 1em; 
box-sizing: border-box;
`;

const ToDoItem = ({todoItem,todoList,setTodoList,checked}) => {
    const editInputRef = useRef(null);

    const [edited,setEdited] = useState(false);
    const [newText,setnewText] = useState(todoItem.text);//처음에는 기존의 값임

    const onClickDelete = () => {
        if(window.confirm('지우겠습니까?'))
        {
            const nextTodoList = todoList.map((item)=>(
                {
                    ...item,
                    deleted : item.id === todoItem.id ? true : item.deleted
                }
            ));
            setTodoList(nextTodoList);
        }
    }
    const onChangeChk = () => {
        //리스트를 돌리면서 해당하는 id값인 경우 done을 반대로 처리함.
        //아니라면 그냥 done 값 유지
        const nextTodoList = todoList.map((item) => (
            {
                ...item,
                done : item.id === todoItem.id ? !item.done : item.done
            }
        ));
        //다시 투두 리스트 값 설정
        setTodoList(nextTodoList);
    };

    //수정버튼으로 변경하기
    const onClickEditButton = () => 
    {
        setEdited(true);
    }

    //새로운 글자 세팅
    const onChangeEdit = (e) => {
        setnewText(e.target.value)
    }

    //서브밋시키기
    function onClickSubmitButton (){
        const nextTodoList = todoList.map((item)=>(
            {
                ...item,
                text : item.id === todoItem.id ? newText : item.text
            }
        ));
        setTodoList(nextTodoList); //새롭게 리스트 수정

        setEdited(false); // 수정상태에서 다시 읽기로 변경
    }

    useEffect(()=> {
        if (edited)
        {
            editInputRef.current.focus();
        }
    },[edited]);
    
    return (
        <ItemBox>
            <CheckBox onChange={onChangeChk} checked={todoItem.done} type="checkbox" />
            {
                edited ? <EditInput
                        type="text"
                        value={newText}
                        ref={editInputRef}
                        onChange={onChangeEdit}
                        /> :
                        <ItemName chk={checked}>{todoItem.text}</ItemName>
            }
            
            { //중간에 바꾸고 싶으면 대괄호 쓰기(완료된 경우 수정 버튼 사용 불가)
                !todoItem.done ? 
                    edited ? 
                    (<EditBtn type="button" onClick={onClickSubmitButton} > 👌 </EditBtn>) :
                    (<EditBtn type="button" onClick={onClickEditButton}> ✏ </EditBtn>)
                    : null
            }
            <DelBtn type="button" onClick={onClickDelete}> 🗑 </DelBtn>
        </ItemBox>
    );
}

export default ToDoItem;