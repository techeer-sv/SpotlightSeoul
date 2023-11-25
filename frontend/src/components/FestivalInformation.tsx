import axios from 'axios';
import { useState } from 'react';
import ViewIcon from '../assets/images/png/ViewIcon.png';
import LikeUnclicked from '../assets/images/svg/Favorite.svg';
import LikeClicked from '../assets/images/svg/Favorite_fill.svg';

type FestivalInformationProps = {
  mainImg: string;
  majorCodeName: string;
  subCodeName: string;
  place: string;
  title: string;
  date: string;
  targetUser: string;
  isFree: string;
  orgLink: string;
  festivalView: number;
  festivalLike: number;
  festivalId: string | undefined;
};

type PostLike = {
  festival_like: number;
};

function FestivalInformation({
  mainImg,
  majorCodeName,
  subCodeName,
  place,
  title,
  date,
  targetUser,
  isFree,
  orgLink,
  festivalView,
  festivalLike,
  festivalId,
}: FestivalInformationProps) {
  const [updatedLike, setUpdatedLike] = useState<number>(festivalLike);
  const [likeClicked, setLikeClicked] = useState<boolean>(false);

  const plusLike = async () => {
    try {
      const response = await axios.put<PostLike>(
        `http://localhost:8080/api/v1/festivals/likes/${festivalId}`,
      );
      const LikeData: PostLike = response.data;
      setUpdatedLike(LikeData.festival_like);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <div className="mr-2 flex h-4 w-10 items-center justify-center rounded-sm bg-[#7EB2FF] text-center font-Pretendard text-[10px] font-bold sm:h-5 sm:w-12 sm:rounded-md sm:text-xs md:h-6 md:rounded-lg lg:h-8 lg:w-16 lg:text-base xl:h-9 xl:w-20 xl:rounded-xl xl:text-lg 2xl:h-11 2xl:w-24 2xl:rounded-2xl 2xl:text-xl">
              {majorCodeName}
            </div>
            <span className="flex text-center font-Pretendard text-[10px] font-bold text-[#06439F] sm:text-xs lg:text-sm xl:text-base 2xl:text-lg">
              {subCodeName}
            </span>
          </div>
          <div className="flex items-center">
            <img src={ViewIcon} alt="view icon" className="mr-1 h-7 w-7" />
            <span className="mr-3 font-Pretendard text-base">
              {festivalView}
            </span>
            {!likeClicked ? (
              <div
                className="flex items-center hover:cursor-pointer hover:underline"
                onClick={() => {
                  plusLike();
                  setLikeClicked(true);
                }}
              >
                <img
                  src={LikeUnclicked}
                  alt="like clicked"
                  className="mr-1 h-6 w-6"
                />
                <span className="font-Pretendard text-base">
                  {festivalLike}
                </span>
              </div>
            ) : (
              <div className="flex items-center hover:cursor-pointer hover:underline">
                <img
                  src={LikeClicked}
                  alt="like clicked"
                  className="mr-1 h-6 w-6"
                />
                <span className="font-Pretendard text-base">{updatedLike}</span>
              </div>
            )}
          </div>
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
              {isFree}
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
