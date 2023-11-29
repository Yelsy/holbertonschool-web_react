import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
export const Footer = () => {
  return (
    <>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy('isIndex')}</p>
      </footer>
    </>
  )
}

