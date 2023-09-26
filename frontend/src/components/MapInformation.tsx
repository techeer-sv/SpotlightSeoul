import MapSampleImage from '../assets/images/png/MapSampleImage.png';

function MapInformation() {
  return (
    <div>
      {/* 위치 정보(지도) */}
      <div className="flex flex-col items-center mt-40 mb-8">
        <span className="text-[#06439F] font-LexendDeca text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
          위치 안내
        </span>
        <img
          src={MapSampleImage}
          alt="MapSampleImage"
          className="w-11/12 h-auto mt-4 sm:mt-6 lg:mt-8"
        />
      </div>
    </div>
  );
}

export default MapInformation;
