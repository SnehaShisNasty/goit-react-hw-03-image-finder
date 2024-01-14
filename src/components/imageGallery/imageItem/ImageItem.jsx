import { Item, Img } from './ImgaItem.styled';

const ImageItem = ({ data, showModal }) => {
  return data.map(({ id, webformatURL, largeImageURL }) => (
    <Item key={id} onClick={() => showModal(largeImageURL)}>
      <Img src={webformatURL} alt="" />
    </Item>
  ));
};
export { ImageItem };
