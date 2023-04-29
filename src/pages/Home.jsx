import React from 'react'
 import Graph from '../components/Graph'
import Form from '../components/Form'

const Home = () => {
    return (
    <>
        <div className="App">
            <div className="container max-auto max-w-full text-center drop-shadow-lg text-gray-800">
                <div className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">Expense Tracker</div>
                {/* grid column */}
                <div className="grid md:grid-cols-2 gap-4"></div>
                {/* chart */}
                <Graph />
                {/* form */}
                <Form/>
            </div>
        </div>
    </>
    )
}

export default Home