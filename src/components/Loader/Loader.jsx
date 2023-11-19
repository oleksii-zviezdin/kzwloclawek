import { Rings } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <Rings color="#bb0000" height="180" width="180" />
    </LoaderWrapper>
  );
};

export default Loader;
