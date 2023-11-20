import signImg from '../assets/images/png/signImg.png';

function LoginPage() {
  return (
    <div className="bg-loginimg w-full bg-[#F5F5F6]">
      <div className="flex  font-LexendDeca">
        <img src={signImg} alt="login" className="h-full" />

        <div className="flex w-72 flex-col justify-center space-y-4">
          <div className="mb-3 text-[30pt] font-medium text-[#06439F]">
            Login
          </div>
          <input
            className="rounded-md bg-[#EAF0F7] px-2 py-2 font-light outline-none "
            type="text"
            placeholder="ID"
          />
          <input
            className="rounded-md bg-[#EAF0F7] px-2 py-2 font-light outline-none "
            type="password"
            placeholder="PassWord"
          />
          <button className="rounded-md bg-[#06439F] py-2 font-light text-white">
            Login
          </button>
          <button className="rounded-md border border-[#06439F] bg-[#ffffff] py-2 font-light text-[#06439F]">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
