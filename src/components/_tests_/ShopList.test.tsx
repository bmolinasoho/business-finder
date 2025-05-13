import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ShopList from '../ShopList';
import type { Shop } from '@/types/shop';

const mockShops: Shop[] = [
  {
    id: 1,
    name: 'Café Central',
    type: 'Cafetería',
    address: 'Av. 10 de Agosto y Patria, Quito',
    latitude: -0.22,
    longitude: -78.512,
    openingHours: '08:00 - 22:00',
    imageUrl: 'https://example.com/cafe.jpg',
  },
  {
    id: 2,
    name: 'Librería El Saber',
    type: 'Librería',
    address: 'Av. Amazonas N34-56, Quito',
    latitude: -0.185,
    longitude: -78.498,
    openingHours: '09:00 - 19:00',
    imageUrl: 'https://example.com/libro.jpg',
  },
];

describe('ShopList Component', () => {
  it('muestra mensaje cuando no hay comercios', () => {
    render(<ShopList shops={[]} onSelect={() => {}} />);
    expect(screen.getByText('No se encontraron comercios.')).toBeInTheDocument();
  });

  it('renderiza la lista de comercios cuando hay datos', () => {
    render(<ShopList shops={mockShops} onSelect={() => {}} />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(mockShops.length);
    expect(screen.getByText('Café Central')).toBeInTheDocument();
    expect(screen.getByText('Librería El Saber')).toBeInTheDocument();
  });

  it('llama a onSelect y onClose al hacer clic en un item', () => {
    const selectSpy = vi.fn();
    const closeSpy = vi.fn();

    render(
      <ShopList
        shops={mockShops}
        onSelect={selectSpy}
        onClose={closeSpy}
      />
    );

    const firstItem = screen.getByText('Café Central');
    fireEvent.click(firstItem);
    expect(selectSpy).toHaveBeenCalledWith(mockShops[0]);
    expect(closeSpy).toHaveBeenCalled();
  });

  it('no falla si no se pasa onClose', () => {
    const selectSpy = vi.fn();
    render(<ShopList shops={mockShops} onSelect={selectSpy} />);
    const secondItem = screen.getByText('Librería El Saber');
    fireEvent.click(secondItem);
    expect(selectSpy).toHaveBeenCalledWith(mockShops[1]);
  });
});
