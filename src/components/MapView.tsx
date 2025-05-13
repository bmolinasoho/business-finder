import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import type { Shop } from '@/types/shop';

delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).href,
  iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).href,
  shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).href,
});

interface MapViewProps {
  shops: Shop[];
  onSelect: (shop: Shop) => void;
}

const MapView: React.FC<MapViewProps> = ({ shops, onSelect }) => {
  const center: [number, number] = shops.length
    ? [shops[0].latitude, shops[0].longitude]
    : [-0.180653, -78.467834];

  return (
    <div className="w-full h-full relative z-0">
      <MapContainer
        center={center}
        zoom={15}
        scrollWheelZoom={true}
        className="h-full w-full z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        {shops.map((shop) => (
          <Marker
            key={shop.id}
            position={[shop.latitude, shop.longitude]}
            eventHandlers={{ click: () => onSelect(shop) }}
          >
            <Popup>
              <div className="text-sm font-semibold">{shop.name}</div>
              <div className="flex gap-2 text-xs text-gray-600">
                <span className="font-bold text-black">Tipo:</span>
                {shop.type}
              </div>
              <div className="flex gap-2">
                <span className="font-bold">Direccion:</span>
                <span>
                  {shop.address}
                </span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold">Horario:</span>
                <span>
                  {shop.openingHours}
                </span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
