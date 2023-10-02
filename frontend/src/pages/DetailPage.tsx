import NavBar from '../components/NavBar';
import FestivalInformation from '../components/FestivalInformation';
import MapInformation from '../components/MapInformation';

function DetailPage() {
  return (
    <div className="flex flex-col items-center">
      {/* 네비게이션 바 */}
      <NavBar />
      {/* Content */}
      <div className="flex h-auto w-11/12 flex-col items-center justify-center">
        {/* 대표이미지 및 공연 세부정보 */}
        <FestivalInformation />
        {/* 위치정보 (지도) */}
        <MapInformation />
      </div>
    </div>
  );
}

export default DetailPage;
