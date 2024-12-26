import { NewsCard } from '../../../UI/cards/NewsCard/NewsCard';
import { ProductCard } from '../../../UI/cards/ProductCard/ProductCard';
import { Flex } from '../../Flex';

export const SectionItems = ({ items, type }) => {
  return (
    <Flex>
      {items.map((item) => {
        switch (type) {
          case 'product':
            return <ProductCard key={item.id} item={item} />;
          case 'news':
            return <NewsCard key={item.id} item={item} />;
        }
      })}
    </Flex>
  );
};
