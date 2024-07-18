import { create } from 'zustand';
import { Info } from '../types/info';

// Map 상태 관리
interface MapState {
  map: naver.maps.Map | null;
  isInitMap: boolean;
  setIsinitMap: (isInitMap: boolean) => void;
  setMap: (map: naver.maps.Map) => void;
}
export const useMapStore = create<MapState>((set) => ({
  map: null,
  isInitMap: false,
  setIsinitMap: (isInitMap) => set({ isInitMap }),
  setMap: (map) => set({ map }),
}));

// Infos 상태 관리
interface InfosState {
  infos: Info[] | null;
  selectedInfo: Info | null;
  setInfos: (infos: Info[]) => void;
  setSelectedInfo: (index: number) => void;
}
export const useInfoStore = create<InfosState>((set, get) => ({
  infos: null,
  selectedInfo: null,
  setInfos: (infos) => set({ infos }),
  setSelectedInfo: (index) => {
    const { infos, selectedInfo } = get();
    if (infos) {
      const newSelectedInfo =
        selectedInfo === infos[index] ? null : infos[index];
      set({ selectedInfo: newSelectedInfo });
    }
  },
}));
