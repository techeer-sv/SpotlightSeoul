import { useNavigate } from 'react-router-dom';

function PostCard({
  postId,
  orgName,
  mainImg,
  startDate,
  endDate,
  title,
  category,
}: {
  postId: number;
  orgName: string;
  mainImg: string;
  startDate: string;
  endDate: string;
  title: string;
  category: string;
}) {
  const navigate = useNavigate();
  console.log('postid', postId);
  return (
    <div
      onClick={() => {
        navigate(`/detail/${postId}`);
      }}
      className="flex flex-col items-center justify-center"
    >
      <button
        type="button"
        className="mx-4 my-6 h-80 w-[180px] rounded-[10px] border border-[#434343] bg-white px-3"
      >
        {/* 썸네일 이미지 */}
        <div className="">
          <img
            className="mx-auto w-[140px] rounded-[10px] "
            src={mainImg}
            alt="thum"
          />
          <div
            className="absolute -mt-[198px] ml-[87px] flex h-[24px]
            w-[60px] items-center justify-center
            rounded-bl-[10px] rounded-tr-[10px] bg-[#E34646] text-center font-LexendDeca text-xs
            font-medium text-white "
          >
            공연
          </div>
        </div>

        {/* 공연명 */}
        <p className="mt-4 text-left font-LexendDeca text-sm font-bold">
          {title}
        </p>
        {/* 공연 기간 */}
        <p className="mt-1 text-left font-LexendDeca text-xs text-gray-500">
          {startDate}
        </p>
      </button>
    </div>
  );
}

export default PostCard;
