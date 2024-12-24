import { ProductCard } from '../../../UI/cards/ProductCard/ProductCard';
import { Flex } from '../../Flex';

export const SectionItems = ({ items, type }) => {
  return (
    <Flex>
      {items.map((item) => (
        <ProductCard key={items.id} item={item} />
      ))}
    </Flex>
  );
};
