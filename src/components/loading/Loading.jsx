import { RotatingLines } from 'react-loader-spinner';
import { CentralDiv } from './Loading.styled';
const Loading = () => {
  return (
    <CentralDiv>
      <RotatingLines
        visible={true}
        height="120"
        width="120"
        color="black"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </CentralDiv>
  );
};
export { Loading };
