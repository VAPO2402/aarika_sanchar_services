import React from 'react'
import { HashLink } from "react-router-hash-link";

import '../styles/header.scss'
import { Button } from '@chakra-ui/react';

const Header = () => {
  return (
    <>
    <nav>
      <div className="aarika">
        AARIKA
      </div>
      <div className="links">
        <div className="hashes"><HashLink to={"/#home"}>Home</HashLink></div>
        <div className="hashes"><HashLink to={"/#features"}>Features</HashLink></div>
        <div className="hashes"><HashLink to={"/#process"}>Process</HashLink></div>
        <div className="hashes"><HashLink to={"/#prices"}>Prices</HashLink></div>
        <div className="hashes"><HashLink to={"/#contactus"}>ContactUs</HashLink></div>
        
        
        
        
        
      </div>
      <div className="demo">
        <Button paddingLeft={10} paddingRight={10}>Demo</Button>
      </div>
    </nav>
    </>
  )
}

export default Header