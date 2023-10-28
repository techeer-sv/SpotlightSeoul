import '../index.css';
import magnifier from '../assets/images/svg/magnifier.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';

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

type PostCardData = {
  id: number;
  org_name: string;
  main_img: string;
  strt_date: string;
  end_date: string;
  title: string;
  category: string;
};

type NavBarProps = {
  setSearchResults: React.Dispatch<React.SetStateAction<PostCardData[]>>; // 새로운 Props 타입 정의
};

function NavBar({ setSearchResults }: NavBarProps) {
  const [searchTitle, setSearchTitle] = useState<string>('');

  const inputSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTitle(e.target.value);
  };

  const handleKeyDown = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      try {
        const response = await axios.post<searchResponseData>(
          'http://localhost:8080/api/v1/festivals',
          { title: searchTitle },
        );
        const searchResponseData: searchResponseData = response.data;
        setSearchResults(searchResponseData.post_responses); // 이 부분은 PostResponse를 PostCardData로 변환해야 할 것 같습니다.
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <div className="flex h-14 w-screen items-center justify-between border-b-[1px] border-solid border-[#C6C6C6] bg-white md:h-16">
        {/* 로고 */}
        <button
          className="ml-5 flex basis-1/4 text-left font-LexendDeca text-xl font-bold md:text-2xl"
          type="button"
        >
          <span className="text-[#06439F]">Spotlight</span>
          <span className="text-[#FFD600]">Seoul</span>
        </button>
        {/* 검색창 */}
        <div className="flex h-7 w-11/12 basis-2/4 rounded-xl border-[1px] border-solid border-[#C6C6C6] bg-[#F9F9F9] sm:h-9 md:h-11">
          <img className="ml-2 w-4 md:w-5" src={magnifier} alt="magnifier" />
          <input
            className="ml-1 bg-[#F9F9F9] text-sm md:text-base"
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
