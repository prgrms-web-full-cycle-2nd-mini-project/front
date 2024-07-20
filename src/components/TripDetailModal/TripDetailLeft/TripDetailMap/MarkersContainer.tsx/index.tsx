import { useInfoStore, useMapStore } from '../../../../../stores/mapStore';
import { Info } from '../../../../../types/info';
import Marker from './Marker';

export default function MarkerContainer() {
  const { map } = useMapStore();
  const { infos, selectedInfo, setSelectedInfo } = useInfoStore();

  //// console.log(map);
  if (!map || !infos) {
    return null;
  }

  return (
    <>
      {infos.map((info: Info) => (
        <Marker
          key={info.id}
          map={map}
          position={info.position}
          content={`<div class="marker">${info.idx}</div>`}
        />
      ))}
      {selectedInfo && (
        <Marker
          map={map}
          position={selectedInfo.position}
          content={`<div class="marker selected">${selectedInfo.idx}</div>`}
        />
      )}
    </>
  );
}
