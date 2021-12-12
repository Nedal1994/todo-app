import React from 'react';
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

import ToDo from './components/todo/todo.js';

export const settingsContext = React.createContext()

export default function app() {
  
  return (
    <div>
      <settingsContext.Provider value={'nedal'}>
          <ToDo/>
      </settingsContext.Provider>
      
    </div>
  )
}
