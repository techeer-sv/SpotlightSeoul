import { useEffect } from 'react';

let mapInstance: naver.maps.Map | null = null;

const loadScript = (src: string, callback: () => void) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  script.onload = () => callback();
  document.head.appendChild(script);
};

function MapInformation({ lat, lot }: { lat: number; lot: number }) {
  const initMap = () => {
    // 추가 옵션 설정
    const mapOptions = {
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
      center: new naver.maps.LatLng(lat, lot),
      zoom: 16,
    };

    // 지도 초기화 확인
    if (!mapInstance) {
      mapInstance = new naver.maps.Map('map', mapOptions);
    }

    // Marker 생성
    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(lat, lot),
      map: mapInstance,
    });

    // Marker 클릭 시 지도 초기화
    naver.maps.Event.addListener(marker, 'click', () => {
      mapInstance?.setCenter(new naver.maps.LatLng(lat, lot));
      mapInstance?.setZoom(16);
    });
  };

  useEffect(() => {
    // 스크립트 로딩 확인
    if (typeof naver === 'undefined') {
      loadScript(
        'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=2nezq8tgn5',
        initMap,
      );
    } else {
      initMap();
    }
  }, []);

  return (
    <>
      {/* 위치 정보(지도) */}
      <div className="mb-8 mt-40 flex w-screen flex-col items-center">
        <span className="sm:text-md font-LexendDeca text-sm font-bold text-[#06439F] md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          위치 안내
        </span>
        <div id="map" className="mt-4 h-[500px] w-11/12 sm:mt-6 lg:mt-8" />
      </div>
    </>
  );
}

export default MapInformation;
