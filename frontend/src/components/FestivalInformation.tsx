import SampleImage1 from '../assets/images/jpg/SampleImage1.jpeg';

function FestivalInformation() {
  return (
    <div className="flex justify-between items-start w-11/12 max-w-[1400px] h-auto mx-0 mt-14">
      {/* 대표이미지 */}
      <img
        src={SampleImage1}
        alt="SampleImage1"
        className="flex w-5/12 h-auto rounded-md bg-no-repeat shadow-lg shadow-slate-500"
      />
      {/* 공연 세부정보 */}
      <div className="flex flex-shrink flex-col items-start w-6/12">
        {/* 공연 분류 */}
        <div className="flex items-center">
          <div className="flex mr-2 justify-center items-center text-center w-10 sm:w-12 lg:w-16 xl:w-20 2xl:w-24 h-4 sm:h-5 md:h-6 lg:h-8 xl:h-9 2xl:h-11 font-Pretendard text-[10px] sm:text-xs lg:text-base xl:text-lg 2xl:text-xl rounded-sm sm:rounded-md md:rounded-lg xl:rounded-xl 2xl:rounded-2xl font-bold bg-[#7EB2FF]">
            공연
          </div>
          <span className="flex text-[10px] sm:text-xs lg:text-sm xl:text-base 2xl:text-lg text-center font-Pretendard font-bold text-[#06439F]">
            뮤지컬
          </span>
        </div>
        {/* 제목 */}
        <span className="font-Pretendard text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold mt-2 sm:mt-3 md:mt-4 lg:mt-6 xl:mt-8 2xl:mt-10">
          [2023 한강노들섬 클래식] 발레 백조의 호수
        </span>
        <div className="flex flex-col space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 xl:space-y-14 2xl:space-y-16 mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16">
          {/* 장소 */}
          <div className="flex items-center">
            <span className="text-[#06439F] font-Pretendard text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold mx-5">
              장소
            </span>
            <span className="text-[#585858] font-Pretendard text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-medium">
              한강 노들섬 잔디마당
            </span>
          </div>
          {/* 기간 */}
          <div className="flex items-center">
            <span className="text-[#06439F] font-Pretendard text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold mx-5">
              기간
            </span>
            <span className="text-[#585858] font-Pretendard text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-medium">
              2023-10-14 ~ 2023-10-15
            </span>
          </div>
          {/* 시간 */}
          <div className="flex items-center">
            <span className="text-[#06439F] font-Pretendard text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold mx-5">
              시간
            </span>
            <span className="text-[#585858] font-Pretendard text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-medium">
              18:00(90분 인터미션 없음)
            </span>
          </div>
          {/* 대상 */}
          <div className="flex items-center">
            <span className="text-[#06439F] font-Pretendard text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold mx-5">
              대상
            </span>
            <span className="text-[#585858] font-Pretendard text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-medium">
              7세 이상 관람가
            </span>
          </div>
          {/* 요금 */}
          <div className="flex items-center">
            <span className="text-[#06439F] font-Pretendard text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold mx-5">
              요금
            </span>
            <span className="text-[#585858] font-Pretendard text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-medium">
              무료
            </span>
          </div>
        </div>
        {/* 홈페이지 바로가기 */}
        <button
          type="button"
          className="flex justify-center items-center mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16 w-24 sm:w-32 md:w-36 lg:w-40 xl:w-44 2xl:w-48 h-7 sm:h-10 md:h-12 lg:h-13 xl:h-14 2xl:h-16 bg-[#252525] rounded-lg border-2 border-solid border-[#FFF] text-white font-Pretendard text-center text-[10px] sm:text-xs lg:text-sm xl:text-base 2xl:text-lg font-medium"
        >
          홈페이지 바로가기
        </button>
      </div>
    </div>
  );
}

export default FestivalInformation;
