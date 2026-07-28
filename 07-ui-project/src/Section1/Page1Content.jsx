import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
    return (
        <div className='pb-20 pt-6 flex justify-between items-center gap-10 h-[90vh] px-18'>
            <LeftContent/>
            <RightContent users={props.users}/>
        </div>
    )
}

export default Page1Content