import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar Component', () => {
  it('renderiza el input con el placeholder correcto y el valor inicial', () => {
    render(<SearchBar filterTerm="hola" setFilterTerm={() => {}} />);
    const input = screen.getByPlaceholderText('Buscar comercios por nombre o tipo...');
    expect(input).toBeInTheDocument();
    expect((input as HTMLInputElement).value).toBe('hola');
  });

  it('llama a setFilterTerm al cambiar el input', () => {
    const setFilterTerm = vi.fn();
    render(<SearchBar filterTerm="" setFilterTerm={setFilterTerm} />);
    const input = screen.getByPlaceholderText(/buscar comercios por nombre o tipo/i);

    fireEvent.change(input, { target: { value: 'café' } });
    expect(setFilterTerm).toHaveBeenCalledWith('café');
  });
});
