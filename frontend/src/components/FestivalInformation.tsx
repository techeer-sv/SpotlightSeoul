function FestivalInformation({
  mainImg,
  codeName,
  place,
  title,
  date,
  targetUser,
  price,
  orgLink,
}: {
  mainImg: string;
  codeName: string;
  place: string;
  title: string;
  date: string;
  targetUser: string;
  price: string;
  orgLink: string;
}) {
  return (
    <div className="mx-0 mt-14 flex h-auto w-11/12 max-w-[1400px] items-start justify-between">
      {/* 대표이미지 */}
      <img
        className="flex h-auto w-5/12 rounded-md bg-no-repeat shadow-lg shadow-slate-500"
        src={mainImg}
        alt="FestivalImage"
      />
      {/* 공연 세부정보 */}
      <div className="flex w-6/12 flex-shrink flex-col items-start">
        {/* 공연 분류 */}
        <div className="flex items-center">
          <div className="mr-2 flex h-4 w-10 items-center justify-center rounded-sm bg-[#7EB2FF] text-center font-Pretendard text-[10px] font-bold sm:h-5 sm:w-12 sm:rounded-md sm:text-xs md:h-6 md:rounded-lg lg:h-8 lg:w-16 lg:text-base xl:h-9 xl:w-20 xl:rounded-xl xl:text-lg 2xl:h-11 2xl:w-24 2xl:rounded-2xl 2xl:text-xl">
            공연
          </div>
          <span className="flex text-center font-Pretendard text-[10px] font-bold text-[#06439F] sm:text-xs lg:text-sm xl:text-base 2xl:text-lg">
            {codeName}
          </span>
        </div>
        {/* 제목 */}
        <span className="mt-2 font-Pretendard text-xs font-bold sm:mt-3 sm:text-sm md:mt-4 md:text-base lg:mt-6 lg:text-lg xl:mt-8 xl:text-xl 2xl:mt-10 2xl:text-2xl">
          {title}
        </span>
        <div className="mt-6 flex flex-col space-y-6 sm:mt-8 sm:space-y-8 md:mt-10 md:space-y-10 lg:mt-12 lg:space-y-12 xl:mt-14 xl:space-y-14 2xl:mt-16 2xl:space-y-16">
          {/* 장소 */}
          <div className="flex items-center">
            <span className="mx-5 font-Pretendard text-xs font-bold text-[#06439F] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              장소
            </span>
            <span className="font-Pretendard text-[10px] font-medium text-[#585858] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
              {place}
            </span>
          </div>
          {/* 기간 */}
          <div className="flex items-center">
            <span className="mx-5 font-Pretendard text-xs font-bold text-[#06439F] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              기간
            </span>
            <span className="font-Pretendard text-[10px] font-medium text-[#585858] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
              {date}
            </span>
          </div>
          {/* 시간 */}
          <div className="flex items-center">
            <span className="mx-5 font-Pretendard text-xs font-bold text-[#06439F] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              시간
            </span>
            <span className="font-Pretendard text-[10px] font-medium text-[#585858] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
              18:00(90분 인터미션 없음)
            </span>
          </div>
          {/* 대상 */}
          <div className="flex items-center">
            <span className="mx-5 font-Pretendard text-xs font-bold text-[#06439F] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              대상
            </span>
            <span className="font-Pretendard text-[10px] font-medium text-[#585858] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
              {targetUser}
            </span>
          </div>
          {/* 요금 */}
          <div className="flex items-center">
            <span className="mx-5 font-Pretendard text-xs font-bold text-[#06439F] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              요금
            </span>
            <span className="font-Pretendard text-[10px] font-medium text-[#585858] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
              {price}
            </span>
          </div>
        </div>
        {/* 홈페이지 바로가기 */}
        <button
          className="lg:h-13 mt-6 flex h-7 w-24 items-center justify-center rounded-lg border-2 border-solid border-[#FFF] bg-[#252525] text-center font-Pretendard text-[10px] font-medium text-white sm:mt-8 sm:h-10 sm:w-32 sm:text-xs md:mt-10 md:h-12 md:w-36 lg:mt-12 lg:w-40 lg:text-sm xl:mt-14 xl:h-14 xl:w-44 xl:text-base 2xl:mt-16 2xl:h-16 2xl:w-48 2xl:text-lg"
          type="button"
          onClick={() => window.open(orgLink, '_blank')}
        >
          홈페이지 바로가기
        </button>
      </div>
    </div>
  );
}

export default FestivalInformation;
