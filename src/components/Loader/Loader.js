import { RotatingLines } from 'react-loader-spinner';
import { WrapperLoader } from './Loader.styled';

const sizes = {
  sm: 20,
  md: 40,
  lg: 60,
};

export const Loader = ({ size = 'lg' }) => {
  return (
    <WrapperLoader>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="4"
        width={sizes[size]}
        animationDuration="1.2"
      />
    </WrapperLoader>
  );
};
