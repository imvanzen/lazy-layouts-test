import { LayoutWithHeader } from '../components/layouts/LayoutWithHeader';
import { useEffect } from 'react';

function Home() {

  useEffect(() => {
    console.log('Home Rerendered');
  }, []);

  useEffect(() => {
    console.log('Home every render');
  });

  return (
    <div>home</div>
  )
}

Home.getLayout = (page) => (
  <LayoutWithHeader>{page}</LayoutWithHeader>
);

export default Home;
