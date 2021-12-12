import React from 'react'
import {Button,FormGroup,InputGroup,Card} from '@blueprintjs/core'

export default function form(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>


                <h2>Add To Do Item</h2>
                <Card>
                    <FormGroup>
                        <label>
                            <span>To Do Item</span>
                            <br />
                            <InputGroup onChange={props.handleChange} name="text" type="text" placeholder="Item Details" />
                        </label>
                        <br /><br />
                        <label>
                            <span>Assigned To</span>
                            <br />
                            <InputGroup onChange={props.handleChange} name="assignee" type="text" placeholder="Assignee Name" />
                        </label>
                        <br /><br />
                        <label>
                            <span>Difficulty</span>
                            <br />
                            <InputGroup onChange={props.handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
                        </label>
                        <br /><br />
                        <label>
                            <Button type="submit">Add Item</Button>
                        </label>
                    </FormGroup>
                </Card>
            </form>
            <br /> <br />
        </div>
    )
}
