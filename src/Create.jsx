import React from 'react'

const Create = () => {
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className="w-50 border bg-secondary text-white p-5">
        <form>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name='name' className='form-control'/>
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" name='name' className='form-control'/>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Create
