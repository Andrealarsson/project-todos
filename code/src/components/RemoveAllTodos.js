import React from 'react'
import { useDispatch } from 'react-redux'

import todos from '../reducers/todos'
import styled from 'styled-components'

const RemoveAllTodos = () => {
  const dispatch = useDispatch()

  return(
    <RemoveAllButton
      type='button'
      onClick={() => dispatch(todos.actions.removeAll())}
      className='clear-button'>
        DELETE ALL
    </RemoveAllButton>
  )
}
export default RemoveAllTodos

const RemoveAllButton = styled.button`
background-color: #88bdbc;
border: none;
margin: 15px 3px;
border-radius: 5px;
color: #ffffff;
height: 30px;
outline: none;
&:hover {
  color: #112d32;
}
`
