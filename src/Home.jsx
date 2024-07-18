import React from 'react'

const Home = () => {
  return (
    <div className='container'>
      <h2>Crud App with JSON server</h2>
      <button className='btn btn-success my-3'>Create +</button>
      <table className='table'>
        <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            
        </tbody>
      </table>
    </div>
  )
}

export default Home
