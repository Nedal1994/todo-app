import React from 'react'

export default function header(props) {
    return (
        <div>
            <header>
                <h2>
                    To do list Manager ({props.incomplete})
                </h2>
            </header>
        </div>
    )
}
