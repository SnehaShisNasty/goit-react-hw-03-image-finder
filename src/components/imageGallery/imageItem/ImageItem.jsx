import { Item, Img } from './ImgaItem.styled';

const ImageItem = ({ data }) => {
  return data.map(({ id, webformatURL }) => (
    <Item key={id}>
      <Img src={webformatURL} alt="" />
    </Item>
  ));
};
export { ImageItem };
