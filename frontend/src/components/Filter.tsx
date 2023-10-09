function Filter() {
  return (
    <div className=" flex justify-center items-center">
      <div className="items-center justify-center mt-16 w-9/12 font-Pretendard bg-zinc-100 py-2 px-1">
        {/* 지역 */}
        <select
          className="font-Pretendard justify-center items-center mx-2 my-3 h-8"
          id="지역"
        >
          <option value="지역">지역</option>
          <option value="강남구">강남구</option>
          <option value="강동구">강동구</option>
          <option value="강북구">강북구</option>
          <option value="강남구">강남구</option>
          <option value="강서구">강서구</option>
          <option value="관악구">관악구</option>
        </select>

        {/* 비용 */}
        <select className="h-8 mx-2 my-3" id="비용">
          <option value="비용">비용별 선택</option>
          <option value="유료">유료</option>
          <option value="무료">무료</option>
        </select>

        {/* 분야 */}
        <select className="h-8 mx-1 my-3" id="분야">
          <option value="분야">분야</option>
          <option value="공연">공연</option>
          <option value="전시">전시</option>
          <option value="축제">축제</option>
          <option value="교육/체험">교육/체험</option>
          <option value="기타">기타</option>
        </select>

        {/* 세부분야 */}
        <select className="h-8 my-3" id="세부분야">
          <option value="세부분야">세부분야</option>
          <option value="콘서트">콘서트</option>
          <option value="클래식">클래식</option>
          <option value="연극">연극</option>
          <option value="무용">무용</option>
          <option value="국악">국악</option>
          <option value="독주/독창회">독주/독창회</option>
        </select>

        {/* 기간 */}
        <li className="inline-block mx-4 h-8 text-center my-3">
          <span className="inline-block mr-3">기간</span>
          <input
            className="inline-block h-8 text-center"
            type="date"
            autoComplete="off"
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
          className="h-8 px-3 py-2 mx-2 my-3 border-2 border-[#959595] rounded-[4px]"
          placeholder="공연명을 입력하세요"
        />
        <button
          type="button"
          className="bg-[#06439F] px-3 py-[5px] font-LexendDeca text-white rounded-[4px] mx-0 my-3"
        >
          검색
        </button>
        <button
          type="button"
          className="bg-[#5f5f5f] px-2 py-[5px] font-LexendDeca text-white rounded-[4px] mx-2 my-3"
        >
          초기화
        </button>
      </div>
    </div>
  );
}

export default Filter;
