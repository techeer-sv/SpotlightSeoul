import exampleThum from '../assets/images/jpg/exampleThum.jpeg';

function PostCard() {
  return (
    <div className="flex flex-col items-center justify-center">
      <button
        type="button"
        className="rounded-[10px] bg-white border border-[#434343] w-[180px] h-80 px-3 mx-4 my-6"
      >
        {/* 썸네일 이미지 */}
        <div className="">
          <img
            className="rounded-[10px] w-[140px] mx-auto "
            src={exampleThum}
            alt="thum"
          />
          <div
            className="absolute flex justify-center text-center items-center
            -mt-[198px] ml-[87px] bg-[#E34646]
            w-[60px] h-[24px] font-LexendDeca text-white text-xs font-medium
            rounded-tr-[10px] rounded-bl-[10px] "
          >
            공연
          </div>
        </div>

        {/* 공연명 */}
        <p className="font-LexendDeca text-sm text-left font-bold mt-4">
          [2023 한강노들섬 클래식] 발레 백조의 호수
        </p>
        {/* 공연 기간 */}
        <p className="font-LexendDeca text-gray-500 text-xs text-left mt-1">
          2023-10-14 ~ 2023-10-15
        </p>
      </button>
    </div>
  );
}

export default PostCard;
