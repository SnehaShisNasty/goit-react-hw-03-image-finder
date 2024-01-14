import styled from 'styled-components';
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: background-color 0.3s, opacity 0.3s;
`;

const ModalCss = styled.div`
  background-color: #fff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  width: 100%;
  transition: opacity 0.3s, transform 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const Close = styled.button`
  font-size: 18px;
  font-weight: bold;
  color: red;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  transition: color 0.3s;
  width: 20px;
  height: 20px;
`;

const ImgCss = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
`;
const Button = styled.button`
  background-color: #e7e9fc;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5px;
  right: 5px;
  border-radius: 50%;
  width: 24px;
  height: 24px;
`;

export { Close, ModalCss, Overlay, ImgCss, Button };
