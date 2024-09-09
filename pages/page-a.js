import {LayoutWithHeader} from '../components/layouts/LayoutWithHeader';

const PageA = ({ query }) => {
  return (
    // <LayoutWithHeader>
    <div>
      Page B
      {JSON.stringify(query)}
    </div>
    // {/* </LayoutWithHeader> */}
  );
};

PageA.getLayout = (page) => (
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

export default PageA;
