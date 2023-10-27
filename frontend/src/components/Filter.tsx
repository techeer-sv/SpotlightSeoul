const Region = [
  { value: '지역' },
  { value: '강남구' },
  { value: '강동구' },
  { value: '강북구' },
  { value: '강서구' },
  { value: '관악구' },
  { value: '광진구' },
  { value: '구로구' },
  { value: '금천구' },
  { value: '노원구' },
  { value: '도봉구' },
  { value: '동대문구' },
  { value: '동작구' },
  { value: '마포구' },
  { value: '서대문구' },
  { value: '서초구' },
  { value: '성동구' },
  { value: '성북구' },
  { value: '송파구' },
  { value: '양천구' },
  { value: '영등포구' },
  { value: '용산구' },
  { value: '은평구' },
  { value: '종로구' },
  { value: '중구' },
  { value: '중랑구' },
  { value: '서울외지역' },
];

const Cost = [{ value: '비용' }, { value: '유료' }, { value: '무료' }];

const Field = [
  { value: '분야' },
  { value: '공연' },
  { value: '전시' },
  { value: '축제' },
  { value: '교육/체험' },
  { value: '기타' },
];

const SubField = [
  { value: '세부분야' },
  { value: '콘서트' },
  { value: '클래식' },
  { value: '연극' },
  { value: '무용' },
  { value: '국악' },
  { value: '독주/독창회' },
];

// type FilterProps = {
//   region: string;
//   setRegion: (region: string) => void;
//   isFree: string;
//   setIsFree: (cost: string) => void;
//   field: string;
//   setField: (field: string) => void;
//   subField: string;
//   setSubField: (subField: string) => void;
//   startDate: string;
//   setStartDate: (startDate: string) => void;
//   endDate: string;
//   setEndDate: (endDate: string) => void;
//   search: string;
//   setSearch: (search: string) => void;
// };

function Filter({
  setIsFree,
  setField,
  setSubField,
  setStartDate,
  setEndDate,
}: {
  setIsFree: (cost: string) => void;
  setField: (field: string) => void;
  setSubField: (subField: string) => void;
  setStartDate: (startDate: string) => void;
  setEndDate: (endDate: string) => void;
}) {
  const onChangeCost = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let { value } = e.currentTarget;
    if (value === '비용') value = '';
    setIsFree(value);
  };

  const onChangeField = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let { value } = e.currentTarget;
    if (value === '분야') value = '';
    setField(value);
  };
  return (
    <div className=" flex items-center justify-center">
      <div className="mt-16 w-9/12 items-center justify-center bg-zinc-100 px-1 py-2 font-Pretendard">
        {/* 지역 */}
        <select
          className="mx-2 my-3 h-8 items-center justify-center font-Pretendard"
          id="지역"
        >
          {Region.map((item) => (
            <option key={item.value} value={item.value}>
              {item.value}
            </option>
          ))}
        </select>

        {/* 비용 */}
        <select className="mx-2 my-3 h-8" id="비용" onChange={onChangeCost}>
          {Cost.map((item) => (
            <option key={item.value} value={item.value}>
              {item.value}
            </option>
          ))}
        </select>

        {/* 분야 */}
        <select className="mx-1 my-3 h-8" id="분야" onChange={onChangeField}>
          {Field.map((item) => (
            <option key={item.value} value={item.value}>
              {item.value}
            </option>
          ))}
        </select>

        {/* 세부분야 */}
        <select className="my-3 h-8" id="세부분야">
          {SubField.map((item) => (
            <option key={item.value} value={item.value}>
              {item.value}
            </option>
          ))}
        </select>

        {/* 기간 */}
        <li className="mx-4 my-3 inline-block h-8 text-center">
          <span className="mr-3 inline-block">기간</span>
          <input
            className="inline-block h-8 text-center"
            type="date"
            autoComplete="off"
            onChange={(e: any) => {
              console.log('start', e.target.value);
            }}
          />
          -
          <input
            className="inline-block h-8 text-center"
            type="date"
            autoComplete="off"
          />
        </li>

        {/* 검색 */}
        <input
          type="text"
          className="mx-2 my-3 h-8 rounded-[4px] border-2 border-[#959595] px-3 py-2"
          placeholder="공연명을 입력하세요"
        />
        <button
          type="button"
          onClick={() => {}}
          className="mx-0 my-3 rounded-[4px] bg-[#06439F] px-3 py-[5px] font-LexendDeca text-white"
        >
          검색
        </button>
        <button
          type="button"
          className="mx-2 my-3 rounded-[4px] bg-[#5f5f5f] px-2 py-[5px] font-LexendDeca text-white"
        >
          초기화
        </button>
      </div>
    </div>
  );
}

export default Filter;
