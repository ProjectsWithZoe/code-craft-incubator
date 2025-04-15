
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/themes/prism-tomorrow.css';

export const highlightCode = (code: string, language: string): string => {
  const validLanguage = 
    languages[language] ? language : 
    languages[language.toLowerCase()] ? language.toLowerCase() : 
    'javascript';
  
  try {
    return highlight(code, languages[validLanguage], validLanguage);
  } catch (e) {
    console.error('Error highlighting code:', e);
    return code;
  }
};
