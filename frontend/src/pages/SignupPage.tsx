import signImg from '../assets/images/png/signImg.png';

function SignupPage() {
  return (
    <div className="bg-loginimg w-full bg-[#F5F5F6]">
      <div className="flex  font-LexendDeca">
        <img src={signImg} alt="login" className="h-full" />

        <div className="flex w-72 flex-col justify-center space-y-4">
          <div className="mb-3 text-[30pt] font-medium text-[#EDC431]">
            Sign up
          </div>
          <input
            className="rounded-md bg-[#F9F9F9] px-2 py-2 font-light outline-none "
            type="text"
            placeholder="Nickname"
          />
          <input
            className="rounded-md bg-[#F9F9F9] px-2 py-2 font-light outline-none "
            type="text"
            placeholder="ID"
          />
          <input
            className="mb-4 rounded-md bg-[#F9F9F9] px-2 py-2 font-light outline-none"
            type="password"
            placeholder="PassWord"
          />
          <button className="rounded-md bg-[#FFDB59] py-2 font-light text-[#667085]">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
