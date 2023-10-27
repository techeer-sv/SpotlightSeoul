import { useNavigate } from 'react-router-dom';

function PostCard({
  id,
  orgName,
  mainImg,
  startDate,
  endDate,
  title,
  category,
}: {
  id: number;
  orgName: string;
  mainImg: string;
  startDate: string;
  endDate: string;
  title: string;
  category: string;
}) {
  const navigate = useNavigate();
  // console.log('postid', postId);

  const backgroundColor =
    category === '공연'
      ? '#E34646'
      : category === '전시'
      ? '#4A6BAB'
      : category === '축제'
      ? '#88D64C'
      : category === '교육/체험'
      ? '#70D4A4'
      : category === '기타'
      ? '#AE5D97'
      : '#DEDEDE'; // 기본값 (여기서는 검은색) 설정
  return (
    <div
      onClick={() => {
        navigate(`/detail/${id}`);
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
            className="mx-auto h-[198px] w-[140px] rounded-[10px] "
            src={mainImg}
            alt="thum"
          />
          <div
            className="absolute -mt-[198px] ml-[87px] flex h-[24px]
            w-[60px] items-center justify-center
            rounded-bl-[10px] rounded-tr-[10px] bg-[#E34646] text-center font-LexendDeca text-xs
            font-medium text-white "
            style={{ backgroundColor }}
          >
            {category}
          </div>
        </div>

        {/* 공연명 */}
        <p className="mt-4 text-left font-LexendDeca text-sm font-bold">
          {title}
        </p>
        {/* 공연 기간 */}
        <p className="mt-1 text-left font-LexendDeca text-xs text-gray-500">
          {startDate}
          {endDate}
        </p>
      </button>
    </div>
  );
}

export default PostCard;
