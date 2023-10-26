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

function NavBar() {
  const [searchTitle, setSearchTitle] = useState<string>('');
  const [postId, setPostID] = useState<number>(0);
  const [orgName, setOrgName] = useState<string>('');
  const [mainImg, setMainImg] = useState<string>('');
  const [strtDate, setStrtDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [majorCodeName, setMajorCodeName] = useState<string>('');
  const [subCodeName, setSubCodeName] = useState<string>('');
  const [date, setDate] = useState<string>('');

  const inputSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTitle(e.target.value);
  };

  const fetchSearchResults = async () => {
    try {
      const response = await axios.post<searchResponseData>(
        'http://localhost:8080/api/v1/festivals',
        { title: searchTitle },
      );
      const searchResponseData: searchResponseData = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, [searchTitle]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      fetchSearchResults();
    }
  };

  return (
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
  );
}

export default NavBar;
