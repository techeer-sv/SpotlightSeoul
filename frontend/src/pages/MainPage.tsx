import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Filter from '../components/Filter';
import PostCard from '../components/PostCard';
import Paging from '../components/Paging';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { searchResultsState } from '../RecoilState';
import axios from 'axios';

type PostCardData = {
  id: number;
  org_name: string;
  main_img: string;
  strt_date: string;
  end_date: string;
  title: string;
  major_code_name: string;
  date: string;
};

// type FilterData = {
//   id: number;
//   is_free: string;
//   strt_date: string;
//   end_date: string;
//   major_code_name: string;
//   sub_code_name: string;
// };

function MainPage() {
  // 메인페이지 PostCard API 연결을 위한 state
  const [test, setTest] = useState<PostCardData[]>([]);
  // 페이징을 위한 state
  const [page, setPage] = useState<number>(1);
  // 드롭다운 필터링을 위한 state
  // const [filter, setFilter] = useState<FilterData[]>([]);
  const [isFree, setIsFree] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [field, setField] = useState<string>('');
  const [subField, setSubField] = useState<string>('');
  const searchResults = useRecoilValue(searchResultsState);

  // 메인페이지 PostCard API 연결
  const MainPostInformation = async () => {
    try {
      const response = await axios
        .get<{ total_page_num: number; post_responses: PostCardData[] }>(
          `http://localhost:8080/api/v1/festivals/page?offset=${page}&size=20`,
        )
        .then((res) => res.data.post_responses);
      console.log('main', response);
      setTest(response);
    } catch (error) {
      console.log(error);
    }
  };

  // Filter.tsx에서 받아온 state를 이용하여 API 연결
  const FilterInformation = async () => {
    try {
      const response = await axios
        .get<{ total_page_num: number; post_responses: PostCardData[] }>(
          `http://localhost:8080/api/v1/festivals/category?isFree=${isFree}&endDate=${endDate}&page=${page}&strtDate=${startDate}&majorCodeName=${field}`,
        )
        .then((res) => res.data.post_responses);
      console.log('filter', response);
      setTest(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (
      isFree === '' &&
      startDate === '' &&
      endDate === '' &&
      field === '' &&
      subField === ''
    ) {
      MainPostInformation();
    }
  }, [page, isFree, startDate, endDate, field, subField]);
  console.log('isFree', isFree);
  console.log('field', field);

  useEffect(() => {
    if (
      isFree !== '' ||
      startDate !== '' ||
      endDate !== '' ||
      field !== '' ||
      subField !== ''
    ) {
      FilterInformation();
    }
  }, [page, isFree, startDate, endDate, field, subField]);

  useEffect(() => {
    if (searchResults.length > 0) {
      setTest(searchResults);
    } else {
      MainPostInformation();
    }
  }, [page, searchResults]);

  return (
    <div>
      {/* 상단바 */}
      <NavBar />
      {/* 배너 */}
      <Banner />
      {/* 드롭다운 필터링 */}
      <div>
        <Filter
          setIsFree={setIsFree}
          setField={setField}
          setSubField={setSubField}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      </div>
      {/* 검색결과 */}
      {/* <div className="ml-40 mt-8 flex">
        <p className="font-LexendDeca text-lg font-semibold"> 전체</p>
        <p className="ml-1 mt-1 font-LexendDeca text-sm text-blue-900"> (20)</p>
      </div> */}

      {/* 공연목록 */}
      <div className="flex flex-col items-center justify-center ">
        <div className="mx-8 mt-2  flex w-9/12 flex-wrap  items-center justify-center">
          {searchResults.length > 0
            ? searchResults.map((post) => (
                <PostCard
                  key={post.id}
                  id={post.id}
                  orgName={post.org_name}
                  mainImg={post.main_img}
                  startDate={post.strt_date}
                  endDate={post.end_date}
                  title={post.title}
                  category={post.major_code_name}
                  date={post.date}
                />
              ))
            : test?.map((post) => (
                <PostCard
                  key={post.id}
                  id={post.id}
                  orgName={post.org_name}
                  mainImg={post.main_img}
                  startDate={post.strt_date}
                  endDate={post.end_date}
                  title={post.title}
                  category={post.major_code_name}
                  date={post.date}
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
