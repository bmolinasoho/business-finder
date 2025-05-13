import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ShopCard from '../ShopCard';
import type { Shop } from '@/types/shop';

describe('ShopCard Component', () => {
  const mockShop: Shop = {
    id: 1,
    name: 'Café Central',
    type: 'Cafetería',
    address: 'Av. 10 de Agosto y Patria, Quito',
    latitude: -0.22,
    longitude: -78.512,
    openingHours: '08:00 - 22:00',
    imageUrl: 'https://example.com/cafe.jpg',
  };

  it('muestra el nombre y tipo del comercio', () => {
    render(<ShopCard shop={mockShop} onClick={() => {}} />);
    expect(screen.getByText('Café Central')).toBeInTheDocument();
    expect(screen.getByText('Cafetería')).toBeInTheDocument();
  });

  it('invoca onClick cuando se hace clic en la tarjeta', () => {
    const handleClick = vi.fn();
    render(<ShopCard shop={mockShop} onClick={handleClick} />);
    const item = screen.getByRole('listitem');
    fireEvent.click(item);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
