import '../index.css';
import magnifier from '../assets/images/svg/magnifier.svg';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { searchResultsState, PostCardData } from '../RecoilState';

type PostResponse = {
  id: number;
  org_name: string;
  main_img: string;
  strt_date: string;
  end_date: string;
  title: string;
  major_code_name: string;
  sub_code_name: string;
  date: string;
};

type searchResponseData = {
  total_page_num: number;
  post_responses: PostResponse[];
};

function NavBar() {
  const [searchTitle, setSearchTitle] = useState<string>('');
  const setSearchResults = useSetRecoilState(searchResultsState);
  const navigate = useNavigate();

  const inputSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTitle(e.target.value);
  };

  const handleKeyDown = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (searchTitle !== '') {
        try {
          // 검색 API
          const response = await axios.post<searchResponseData>(
            'http://localhost:8080/api/v1/festivals',
            { title: searchTitle },
          );
          const searchResponseData: searchResponseData = response.data;

          const postCardDataArray: PostCardData[] =
            searchResponseData.post_responses.map((post) => ({
              id: post.id,
              org_name: post.org_name,
              main_img: post.main_img,
              strt_date: post.strt_date,
              end_date: post.end_date,
              title: post.title,
              major_code_name: post.major_code_name,
              date: post.date,
            }));

          setSearchResults(postCardDataArray);
          navigate('/');
          window.scrollTo(0, 0);
        } catch (error) {
          console.log(error);
        }
      } else {
        alert('검색어를 입력해주세요.');
      }
    }
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="flex h-14 w-screen items-center justify-between border-b-[1px] border-solid border-[#C6C6C6] bg-white md:h-16">
        {/* 로고 */}
        <div className="flex basis-1/4">
          <button
            className="ml-5 text-left font-LexendDeca text-xl font-bold md:text-2xl"
            type="button"
            onClick={() => {
              window.location.href = '/';
            }}
          >
            <span className="text-[#06439F]">Spotlight</span>
            <span className="text-[#FFD600]">Seoul</span>
          </button>
        </div>
        {/* 검색창 */}
        <div className="flex h-7 w-11/12 basis-2/4 rounded-xl border-[1px] border-solid border-[#C6C6C6] bg-[#F9F9F9] sm:h-9 md:h-11">
          <img className="ml-2 w-4 md:w-5" src={magnifier} alt="magnifier" />
          <input
            className="ml-1 w-11/12 bg-[#F9F9F9] text-sm focus:border-transparent focus:outline-none md:text-base"
            type="text"
            placeholder="search"
            onChange={inputSearchHandler}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="flex basis-1/4" />
      </div>
    </div>
  );
}

export default NavBar;
