import React from 'react'

function LinkService({links}) {
  return (
    <ul className='link-service flex margin-bottom'>
        {
            links?.map(item=>(
                <li>{item}</li>
            ))
        }
    </ul>
  )
}

export default LinkService