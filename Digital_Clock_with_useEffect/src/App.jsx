import React from 'react'
import AppHeading from './components/AppHeading'
import AppData from './components/AppData'
import AppTime from './components/AppTime'

const App = () => {
  return (
    <div className='container text-center'>
        <AppHeading/>
        <AppData/>
        <AppTime/>
    </div>
  )
}

export default App