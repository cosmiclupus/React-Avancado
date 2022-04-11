
import React, { useEffect, memo } from 'react'

const areEqual = (prevProps, nextProps) => {
 return prevProps.loading === nextProps.loading
}

function Twitter (props) {
    const { loading } = props

    state = {
        tweet: 'title'
    }

    // componentDidMount
    useEffect(() => {
    const {posts,loading} = props
    console.log('componentDidMount', posts)
    console.log('componentDidMount:loading', loading)
  },[])

  //componentDidUpdate
  useEffect(() => {
    console.log('ComponentDidUpdate',loading)    
  },[loading])
  
//componentWillUnmount
useEffect(() => {
    return () => {
 console.log('componentWillUnmount: fui removido:(')
    }
},[])

//  shoudComponentUpdate= (nextProps, nextState) =>{
//    return state.tweet !== nextState.tweet 
    
//  }

//tweet = () => {
//      setState({
//        tweet: true
//      })
//  }

 
    const { posts } = props
    console.log('render', posts)

      return (
      <div>
        <button
        tests onClick={.tweet}>Re render</button>
      </div>
      )
  
}

export default memo(Twitter, areEqual)