import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Filter from '../components/Filter';
import PostCard from '../components/PostCard';
import Paging from '../components/Paging';
import { useEffect, useState } from 'react';
import axios from 'axios';

type PostCardData = {
  postId: number;
  org_name: string;
  main_img: string;
  strt_date: string;
  end_date: string;
  title: string;
  category: string;
};

const SIZE = 20;
function MainPage() {
  const [postId, setPostId] = useState<number>(0);
  const [orgName, setOrgName] = useState<string>('');
  const [mainImg, setMainImg] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  // 메인페이지 PostCard API 연결
  const MainPostInformation = async () => {
    try {
      const response = await axios.get<PostCardData>(
        `http://localhost:8080/api/v1/festivals/1`,
      );
      const PostCardData: PostCardData = response.data;
      setPostId(PostCardData.postId);
      setOrgName(PostCardData.org_name);
      setMainImg(PostCardData.main_img);
      setStartDate(PostCardData.strt_date);
      setEndDate(PostCardData.end_date);
      setTitle(PostCardData.title);
      setCategory(PostCardData.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    MainPostInformation();
  }, []);

  return (
    <div>
      {/* 상단바 */}
      <NavBar />
      {/* 배너 */}
      <Banner />
      {/* 드롭다운 필터링 */}
      <Filter />

      {/* 검색결과 */}
      <div className="ml-40 mt-8 flex">
        <p className="font-LexendDeca text-lg font-semibold"> 전체</p>
        <p className="ml-1 mt-1 font-LexendDeca text-sm text-blue-900"> (20)</p>
      </div>

      {/* 공연목록 */}
      <div className="flex flex-col items-center justify-center ">
        <div className="mx-8 mt-2  flex w-9/12 flex-wrap  items-center justify-center">
          <PostCard
            postId={postId}
            orgName={orgName}
            mainImg={mainImg}
            startDate={startDate}
            endDate={endDate}
            title={title}
            category={category}
          />
        </div>

        {/* 페이지네이션 */}
        <Paging />
      </div>
    </div>
  );
}

export default MainPage;
