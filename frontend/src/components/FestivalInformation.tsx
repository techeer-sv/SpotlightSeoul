import SampleImage1 from '../assets/images/jpg/SampleImage1.jpeg';

function FestivalInformation() {
  return (
    <div>
      {/* 공연 대표이미지 및 세부정보 */}
      <div className="flex justify-center items-center w-full h-auto mx-0 mt-10">
        {/* 대표이미지 */}
        <img
          src={SampleImage1}
          alt="SampleImage1"
          className="w-2/5 h-3/5 mx-16 rounded-md bg-no-repeat shadow-lg shadow-slate-500"
        />
        {/* 공연 세부정보 */}
        <div className="flex flex-col items-start mx-16">
          {/* 공연 분류 */}
          <div className="flex items-center">
            <div className="flex mr-2 justify-center items-center text-center w-24 h-11 font-LexendDeca text-xl rounded-2xl font-bold bg-[#7EB2FF]">
              공연
            </div>
            <span className="flex text-lg text-center font-LexendDeca font-bold text-[#06439F]">
              뮤지컬
            </span>
          </div>
          {/* 제목 */}
          <span className="font-LexendDeca text-3xl font-bold mt-10">
            [2023 한강노들섬 클래식] 발레 백조의 호수
          </span>
          <div className="flex flex-col space-y-16 mt-16">
            {/* 장소 */}
            <div className="flex items-center">
              <span className="text-[#06439F] font-LexendDeca text-2xl font-bold mx-5">
                장소
              </span>
              <span className="text-[#585858] font-LexendDeca text-2xl font-medium">
                한강 노들섬 잔디마당
              </span>
            </div>
            {/* 기간 */}
            <div className="flex items-center">
              <span className="text-[#06439F] font-LexendDeca text-2xl font-bold mx-5">
                기간
              </span>
              <span className="text-[#585858] font-LexendDeca text-2xl font-medium">
                2023-10-14 ~ 2023-10-15
              </span>
            </div>
            {/* 시간 */}
            <div className="flex items-center">
              <span className="text-[#06439F] font-LexendDeca text-2xl font-bold mx-5">
                시간
              </span>
              <span className="text-[#585858] font-LexendDeca text-2xl font-medium">
                18:00(90분 인터미션 없음)
              </span>
            </div>
            {/* 대상 */}
            <div className="flex items-center">
              <span className="text-[#06439F] font-LexendDeca text-2xl font-bold mx-5">
                대상
              </span>
              <span className="text-[#585858] font-LexendDeca text-2xl font-medium">
                7세 이상 관람가
              </span>
            </div>
            {/* 요금 */}
            <div className="flex items-center">
              <span className="text-[#06439F] font-LexendDeca text-2xl font-bold mx-5">
                요금
              </span>
              <span className="text-[#585858] font-LexendDeca text-2xl font-medium">
                무료
              </span>
            </div>
          </div>
          {/* 홈페이지 바로가기 */}
          <button
            type="button"
            className="flex justify-center items-center mt-16 w-48 h-16 bg-[#252525] rounded-lg border-2 border-solid border-[#FFF] text-white font-LexendDeca text-center text-lg font-medium"
          >
            홈페이지 바로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default FestivalInformation;
