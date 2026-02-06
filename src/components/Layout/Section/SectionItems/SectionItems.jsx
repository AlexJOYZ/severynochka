import { NewsCard } from '../../../UI/cards/NewsCard/NewsCard';
import { ProductCard } from '../../../UI/cards/ProductCard/ProductCard';


export const SectionItems = ({ items, type }) => {
  return (
    <>
      {items.map((item) => {
        switch (type) {
          case 'product':
            return <ProductCard key={item.id} item={item} />;
          case 'news':
            return <NewsCard key={item.id} item={item} />;
        }
      })}
    </>
  );
};
