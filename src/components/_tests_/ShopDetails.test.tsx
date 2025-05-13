import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ShopDetails from '../ShopDetails';
import type { Shop } from '@/types/shop';

describe('ShopDetails Component', () => {
  it('muestra mensaje cuando no hay comercio seleccionado', () => {
    render(<ShopDetails shop={null} />);
    expect(screen.getByText('Selecciona un comercio')).toBeInTheDocument();
  });

  it('muestra los detalles del comercio cuando shop no es null', () => {
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

    render(<ShopDetails shop={mockShop} />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Café Central');

    const tipoStrong = screen.getByText('Tipo:');
    expect(tipoStrong.parentElement).toHaveTextContent('Tipo: Cafetería');

    const dirStrong = screen.getByText('Dirección:');
    expect(dirStrong.parentElement).toHaveTextContent(
      'Dirección: Av. 10 de Agosto y Patria, Quito'
    );

    const horStrong = screen.getByText('Horario:');
    expect(horStrong.parentElement).toHaveTextContent('Horario: 08:00 - 22:00');

    const img = screen.getByRole('img') as HTMLImageElement;
    expect(img.alt).toBe('Café Central');
    expect(img.src).toBe(mockShop.imageUrl);

    const link = screen.getByRole('link', { name: /Ver en mapa/i }) as HTMLAnchorElement;
    expect(link.href).toContain(encodeURIComponent(mockShop.address));
  });
});
