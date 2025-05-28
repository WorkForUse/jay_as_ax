import React from 'react'

const WelcomeMessage = ({onGetPostsClick}) => {
  return (
    <div className='m-auto'>
        <h1 className='fw-lighter'>No posts here</h1>
        {/* after adding useState no need button to get API posts */}
        {/* <button onClick={onGetPostsClick} type="button" className="btn btn-dark mx-4 my-4">Get post from server</button> */}
    </div>
  )
}

export default WelcomeMessage