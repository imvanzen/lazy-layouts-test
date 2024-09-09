import {LayoutWithHeader} from '../components/layouts/LayoutWithHeader';

const PageB = ({ query }) => {
  return (
    // <LayoutWithHeader>
    <div>
      Page B
      {JSON.stringify(query)}
    </div>
    // </LayoutWithHeader>
  );
};

PageB.getLayout = (page) => (
  <LayoutWithHeader>{page}</LayoutWithHeader>
);

export const getServerSideProps = async ({
  query
}) => {
  return {
    props: {
      query
    }
  };
};

export default PageB;
