import React from 'react'
import { useLoaderData } from 'react-router-dom'

//helper imports
import {fetchData} from './../Helpers'


export function dashboardLoader() {
    const userName= fetchData('userName')
    return {userName}
}

const Dashboard = () => {
    const userName=useLoaderData()
    console.log(userName);
    return (
        <div>Dashboard</div>
    )
}

export default Dashboard