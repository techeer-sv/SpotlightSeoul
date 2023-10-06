import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Filter from '../components/Filter';
import PostCard from '../components/PostCard';
import Paging from '../components/Paging';

function MainPage() {
  return (
    <div>
      {/* 상단바 */}
      <NavBar />
      {/* 배너 */}
      <Banner />
      {/* 드롭다운 필터링 */}
      <Filter />

      {/* 검색결과 */}
      <div className="flex ml-40 mt-8">
        <p className="font-LexendDeca text-lg font-semibold"> 전체</p>
        <p className="font-LexendDeca text-sm text-blue-900 mt-1 ml-1"> (20)</p>
      </div>

      {/* 공연목록 */}
      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-wrap  items-center justify-center w-9/12  mx-8 mt-2">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>

        {/* 페이지네이션 */}
        <Paging />
      </div>
    </div>
  );
}

export default MainPage;
