import { Component } from 'react';
import { createPortal } from 'react-dom';

import { Close, ModalCss, Overlay, ImgCss, Button } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
    document.addEventListener('click', this.ClickClose);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
    document.removeEventListener('click', this.ClickClose);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.close();
    }
  };
  ClickClose = e => {};

  render() {
    const { modal, close } = this.props;
    return createPortal(
      <Overlay onClick={this.closeModal}>
        <ModalCss>
          <Button type="button">
            <Close onClick={close}>X</Close>
          </Button>
          <ImgCss src={modal.modalImg} alt="" />
        </ModalCss>
      </Overlay>,
      modalRoot
    );
  }
}

export { Modal };
