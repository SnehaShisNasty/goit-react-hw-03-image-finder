import { ButtonStyled, CentralDiv } from './Button.styled';
const Button = ({ onClick }) => {
  return (
    <CentralDiv>
      <ButtonStyled onClick={onClick}>Load More</ButtonStyled>
    </CentralDiv>
  );
};
export { Button };
