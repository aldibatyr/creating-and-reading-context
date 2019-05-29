import React from 'react';
import LanguageContext from './LanguageContext'

console.log(LanguageContext)

export default function LangControls(props) {
  return(
    <>
      <button>
        British{' '}
        <span role='img' aria-label='en-gb'>GB</span>
      </button>
      {' '}
      <button>
        American{' '}
        <span role='img' aria-label='en-US'>US</span>
      </button>
      {' '}
      <button>
        Korean{' '}
        <span role='img' aria-label='ko'>KR</span>
      </button>
    </>
  );
}