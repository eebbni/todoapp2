import React, {useState,useRef,useEffect} from 'react';
import styled from 'styled-components';

export const Count = ({todoList}) => {
   return (
    <div>남은 할일 / 전체 개수 : {todoList.filter( item => !item.done && !item.deleted ).length } / {todoList.filter( item => !item.deleted ).length}</div>
   )
}
