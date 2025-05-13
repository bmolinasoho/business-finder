import { useState, useEffect } from 'react';
import { fetchShops } from '@/services/shopService';
import type { Shop } from '@/types/shop';

export function useShops() {
  const [shops, setShops] = useState<Shop[]>([]);
  const [filterTerm, setFilterTerm] = useState<string>('');
  const [filteredShops, setFilteredShops] = useState<Shop[]>([]);

  useEffect(() => {
    fetchShops()
      .then(setShops)
      .catch((err) => console.error('Error cargando comercios:', err));
  }, []);

  useEffect(() => {
    const term = filterTerm.trim().toLowerCase();
    setFilteredShops(
      term === ''
        ? []
        : shops.filter((s) =>
            s.name.toLowerCase().includes(term) || s.type.toLowerCase().includes(term)
          )
    );
  }, [filterTerm, shops]);

  return { filteredShops, filterTerm, setFilterTerm };
}
