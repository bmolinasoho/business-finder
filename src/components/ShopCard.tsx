import React from 'react'
import type { Shop } from '@/types/shop'

interface Props {
  shop: Shop
  onClick: () => void
}

const ShopCard: React.FC<Props> = ({ shop, onClick }) => (
  <li
    onClick={onClick}
    className="cursor-pointer p-2 border border-gray-200 rounded hover:bg-gray-100 transition-colors"
  >
    <h3 className="font-semibold">{shop.name}</h3>
    <p className="text-sm text-gray-600">{shop.type}</p>
  </li>
)

export default ShopCard
