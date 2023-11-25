import { useNavigate } from 'react-router-dom';

function PostCard({
  id,
  orgName,
  mainImg,
  startDate,
  endDate,
  title,
  category,
  date,
}: {
  id: number;
  orgName: string;
  mainImg: string;
  startDate: string;
  endDate: string;
  title: string;
  category: string;
  date: string;
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
      : '#D4D4D4'; // 기본값
  return (
    <div
      onClick={() => {
        navigate(`/detail/${id}`);
        window.scrollTo(0, 0);
      }}
      className="flex flex-col items-center justify-center"
    >
      <button
        type="button"
        className="mx-4 my-6 h-80 w-[180px] rounded-[10px] border border-[#e2e2e2] bg-white px-3 transition duration-300 hover:border-[#666] hover:bg-[#f7f7f7]"
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
        <p
          className="mt-4 text-left font-LexendDeca text-sm font-bold"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {title}
        </p>
        {/* 공연 기간 */}
        <p className="mt-1 text-left font-LexendDeca text-xs text-gray-500">
          {/* {startDate} ~ {endDate} */}
          {date}
        </p>
      </button>
    </div>
  );
}

export default PostCard;
