import React from 'react'
import ReactDom from 'react-dom'
import Family from './family'
import Member from './member'

ReactDom.render(
    <Family  lastname='Silva'>
        <Member name='Joao'/>
        <Member name='Maria'/>
        <Member name='Jose'/>
        <Member name='Pedro'/>
    </Family>
, document.getElementById('app'))