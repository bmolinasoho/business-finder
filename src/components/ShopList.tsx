import type { Shop } from '@/types/shop';
import React from 'react';
import ShopCard from './ShopCard';


interface ShopListProps {
  shops: Shop[];
  onSelect: (shop: Shop) => void;
  onClose?: () => void;
}

const ShopList: React.FC<ShopListProps> = ({ shops, onSelect, onClose }) => {
  if (shops.length === 0) {
    return (
      <div className="p-4 text-gray-500 italic">
        No se encontraron comercios.
      </div>
    );
  }

  const handleClick = (shop: Shop) => {
    onSelect(shop);
    if (onClose) onClose();
  };

  return (
    <ul className="pt-4 pr-6 space-y-2 max-h-[300px] overflow-auto">
      {shops.map(shop => (
        <ShopCard key={shop.id} shop={shop} onClick={() => handleClick(shop)} />
      ))}
    </ul>
  );
};

export default ShopList;
