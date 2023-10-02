import '../index.css';
import magnifier from '../assets/images/svg/magnifier.svg';

function NavBar() {
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
        />
      </div>
      <div className="flex basis-1/4" />
    </div>
  );
}

export default NavBar;
