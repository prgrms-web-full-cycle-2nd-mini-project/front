declare namespace naver.maps {
  class LatLng {
    constructor({ lat: number, lng: number });
  }
  class Map {
    constructor(element: string | HTMLElement, options: MapOptions);
    panTo(latlng: LatLng): void;
  }
  interface MapOptions {
    center: LatLng;
    zoom: number;
  }
  class Event {
    static addListener(
      instance: any,
      eventName: string,
      handler: Function,
    ): void;
    static removeListener(
      instance: any,
      eventName: string,
      handler: Function,
    ): void;
    static trigger(instance: any, eventName: string, ...args: any[]): void;
  }
  interface HTMLIcon {
    content: string | HTMLElement;
  }
  interface MarkerOptions {
    position: LatLng;
    map: Map;
    icon: HTMLIcon;
  }

  class Marker {
    constructor(options: MarkerOptions);
    setMap(map: Map | null): void;
  }
  // 필요한 다른 타입 선언 추가...
}
