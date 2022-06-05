import React from 'react'
import Shruti from './Shruti'
import Shrut from './Shrut'

import styledComponent from 'styled-components'

function Home() {
  return (
    
    <HiIamContainer>
        
    <Shruti
    title="model X"
    description="test"
    backgroundImg="model-x.jpg"
    
    />
     <Shrut
    title="model Y"
    description="test"
    backgroundImg="model-y.jpg"
    />

    <Shrut
    title="interior"
    description="test"
    backgroundImg="new-interior.jpg"
    />
    
    <Shruti
    title="model S"
    description="test"
    backgroundImg="model-s.jpg"
    />

    </HiIamContainer>
  )
}

export default Home
const HiIamContainer=styledComponent.div``