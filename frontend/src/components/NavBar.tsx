import '../index.css';
import magnifier from '../assets/images/svg/magnifier.svg';

function NavBar() {
  return (
    <div className="flex justify-between items-center w-screen h-14 md:h-16 border-b-[1px] border-solid border-[#C6C6C6] bg-white">
      {/* 로고 */}
      <button
        className="flex basis-1/4 text-left text-xl md:text-2xl font-LexendDeca font-bold ml-5"
        type="button"
      >
        <span className="text-[#06439F]">Spotlight</span>
        <span className="text-[#FFD600]">Seoul</span>
      </button>
      {/* 검색창 */}
      <div className="flex basis-2/4 w-11/12 h-7 sm:h-9 md:h-11 rounded-xl border-[1px] border-solid border-[#C6C6C6] bg-[#F9F9F9]">
        <img className="w-4 md:w-5 ml-2" src={magnifier} alt="magnifier" />
        <input
          className="bg-[#F9F9F9] ml-1 text-sm md:text-base"
          type="text"
          placeholder="search"
        />
      </div>
      <div className="flex basis-1/4" />
    </div>
  );
}

export default NavBar;
