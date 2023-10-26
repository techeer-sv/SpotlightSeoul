import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Filter from '../components/Filter';
import PostCard from '../components/PostCard';
import Paging from '../components/Paging';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

type PostCardData = {
  id: number;
  org_name: string;
  main_img: string;
  strt_date: string;
  end_date: string;
  title: string;
  category: string;
};

function MainPage() {
  const [page, setPage] = useState<number>(1);
  const [test, setTest] = useState<PostCardData[]>([]);

  // 메인페이지 PostCard API 연결
  const MainPostInformation = async () => {
    try {
      const response = await axios
        .get(
          `http://localhost:8080/api/v1/festivals/page?offset=${page}&size=20`,
        )
        .then((res) => res.data.post_responses);
      console.log(response);
      setTest(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    MainPostInformation();
  }, [page]);

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
          {test?.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              orgName={post.org_name}
              mainImg={post.main_img}
              startDate={post.strt_date}
              endDate={post.end_date}
              title={post.title}
              category={post.category}
            />
          ))}
        </div>

        {/* 페이지네이션 */}
        <Paging page={page} setPage={setPage} />
      </div>
    </div>
  );
}

export default MainPage;
