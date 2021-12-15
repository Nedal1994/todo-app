'use strict'

const todo = require('../components/todo/todo')
const Form = require('../components/todo/Form')

describe('To-do',()=>{
    it('Toggle complete',()=>{
        let test = new todo(addItem())
        expect(test).toEqual()
    })
    it('Form is working',()=>{
        let test = new Form()
        expect(test).toEqual()
    })
})