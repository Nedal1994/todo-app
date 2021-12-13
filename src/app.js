import {React} from 'react';
import ToDo from './components/todo/todo.js';
import Settings from '../src/components/todo/settings'


export default function app() {
  return (
    <div>
      <Settings>
        <ToDo/>
      </Settings>
    </div>
  )
}
