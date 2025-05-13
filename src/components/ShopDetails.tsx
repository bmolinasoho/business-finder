import type { Shop } from '@/types/shop';
import React from 'react';


interface ShopDetailsProps {
  shop: Shop | null;
}

const ShopDetails: React.FC<ShopDetailsProps> = ({ shop }) => {
  if (!shop) {
    return <div className="p-4 text-gray-500 italic">Selecciona un comercio</div>;
  }

  return (
    <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow-sm mx-auto overflow-hidden p-5">
      <img
        className="w-full h-52 object-cover rounded-t-lg"
        src={shop.imageUrl}
        alt={shop.name}
      />
      <div className="p-5">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {shop.name}
        </h2>
        <p className="mb-3 font-normal text-gray-700">
          <strong className="text-gray-800">Tipo:</strong> {shop.type}
        </p>
        <p className="mb-3 font-normal text-gray-700">
          <strong className="text-gray-800">Dirección:</strong> {shop.address}
        </p>
        <p className="mb-5 font-normal text-gray-700">
          <strong className="text-gray-800">Horario:</strong> {shop.openingHours}
        </p>

        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Ver en mapa
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ShopDetails;
