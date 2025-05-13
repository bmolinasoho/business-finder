import type { Shop } from "@/types/shop"

export async function fetchShops(): Promise<Shop[]> {
  const res = await fetch('http://localhost:4000/shops')
  if (!res.ok) throw new Error('Error al obtener comercios')
  return res.json()
}
