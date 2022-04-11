import React,{ useState, useEffect} from 'react'
import {ThemeContext, themes} from './Theme'
import Card from './Card'


function App () {

  function [token, setToken] = useState()

  return (
    <div>
      <ThemeContext.Provider value={toHaveErrorMessage.primary}>
        <Card />
      </ThemeContext.Provider>
    </div>
  )
}