import React from 'react'
import { HashLink } from "react-router-hash-link";

import '../styles/header.scss'
import { Button } from '@chakra-ui/react';
import { faList, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <nav>
      <div className="aarika">
        AARIKA
      </div>
      <div className="links">
        <input type="checkbox" id='check' />
        <label htmlFor="check">
          <FontAwesomeIcon icon={faList} id='btn' />
          <FontAwesomeIcon icon={faXmark} id='cancel' />
        </label>
        <ul>
          <li><HashLink to={"/#home"}>Home</HashLink></li>
          <li><HashLink to={"/#features"}>Features</HashLink></li>
          <li><HashLink to={"/#process"}>Process</HashLink></li>
          <li><HashLink to={"/#prices"}>Prices</HashLink></li>
          <li><HashLink to={"/#contactus"}>ContactUs</HashLink></li>
        </ul>
        <div className="demo">
          <Button paddingLeft={10} paddingRight={10} colorScheme='green' id='button'>Demo</Button>
        </div>
      </div>
    </nav>
  )
}

export default Header