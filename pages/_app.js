import { useEffect } from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const {
    getLayout = (page) => page
  } = Component;

  useEffect(() => {
    console.log('Root Rerendered');
  }, []);

  useEffect(() => {
    console.log('Root every render');
  });

  return <div>
    <p>Root</p>
    {getLayout(<Component {...pageProps} />)}
  </div>
}

export default MyApp
