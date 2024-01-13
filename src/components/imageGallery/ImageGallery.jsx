import { List, Section } from './ImageGallery.styled';

const ImageGallery = ({ children }) => {
  return (
    <Section>
      <List class="gallery">{children}</List>
    </Section>
  );
};
export { ImageGallery };
