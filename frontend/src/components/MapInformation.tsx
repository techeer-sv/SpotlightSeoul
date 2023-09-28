import MapSampleImage from '../assets/images/png/MapSampleImage.png';

function MapInformation({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) {
  return (
    <div>
      {/* 위치 정보(지도) */}
      <div className="mb-8 mt-40 flex flex-col items-center">
        <span className="sm:text-md font-LexendDeca text-sm font-bold text-[#06439F] md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          위치 안내
        </span>
        <img
          src={MapSampleImage}
          alt="MapSampleImage"
          className="mt-4 h-auto w-11/12 sm:mt-6 lg:mt-8"
        />
      </div>
    </div>
  );
}

export default MapInformation;
