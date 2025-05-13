import { useState } from 'react';
import { useShops} from '@/hooks/useShops';
import SearchBar from '@/components/SearchBar';
import ShopList from '@/components/ShopList';
import MapView from '@/components/MapView';
import ShopDetails from '@/components/ShopDetails';
import type { Shop } from '@/types/shop';

function App() {
  const { filteredShops, filterTerm, setFilterTerm } = useShops();
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleSelectShop = (shop: Shop) => {
    setSelectedShop(shop);
    setShowResults(false);
  };

  const handleFilterChange = (term: string) => {
    setFilterTerm(term);
    setShowResults(true);
  };

  return (
    <div className="flex h-screen w-full">
      <div className="w-full max-w-sm bg-white border-r border-gray-200 z-10 flex flex-col overflow-y-auto">
        <div className="p-4 border-b border-gray-100">
          <SearchBar filterTerm={filterTerm} setFilterTerm={handleFilterChange} />
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-4">
          {filterTerm.trim().length > 0 && showResults && (
            <ShopList
              shops={filteredShops}
              onSelect={handleSelectShop}
              onClose={() => setShowResults(false)}
            />
          )}

          <div className="mt-4">
            <ShopDetails shop={selectedShop} />
          </div>
        </div>
      </div>

      <div className="flex-1 relative">
        <MapView shops={filteredShops} onSelect={handleSelectShop} />
      </div>
    </div>
  );
}

export default App;
