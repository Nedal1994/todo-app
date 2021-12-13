import { React, useContext, useState } from 'react'
import { Button, Card, Elevation } from '@blueprintjs/core'
import ReactPaginate from 'react-paginate'
import { SettingsContext } from './settings'


export default function list(props) {
    const settingsContext = useContext(SettingsContext)
    const [page, setPage] = useState(0)
    const users = settingsContext.numberOfItems
    const visitedPage = page * users

    const displayUsers = props.list
    .slice(visitedPage, visitedPage + users)
    .map((item)=>{
           return (
        <div>
            <Card interactive={true} elevation={Elevation.TWO}>
            <p>{item.text}</p>
              <p><small>Assigned to: {item.assignee}</small></p>
              <p><small>Difficulty: {item.difficulty}</small></p>
              <Button onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</Button>
            </Card>
        </div>
    )
    })
    const pageCount = Math.ceil(props.list.length/users)
    const changePage = ({selectedPage})=>{
        setPage(selectedPage)
    }
    return(
        <>
        {displayUsers}
        <ReactPaginate
        previousLabel={'Previous page'}
        nextLabel={'Next Page'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationButtons'}
        previousLinkClassName={'previousButton'}
        nextLinkClassName={'nextButton'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
        />
        </>
    )
    

 
}
