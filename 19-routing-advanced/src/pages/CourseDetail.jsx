import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    // -------for-dynamic-routing------
    const params = useParams()

    return (
        <div>
            <h1>{params.courseId} Course Detail Page</h1>
        </div>
    )
}

export default CourseDetail