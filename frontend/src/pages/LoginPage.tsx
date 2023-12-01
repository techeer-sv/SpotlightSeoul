import LogoImg from '../assets/images/png/Logo.png';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-loginimg w-full bg-[#ffffff]">
      <div className="flex justify-center">
        <div className="">
          <img
            src={LogoImg}
            alt="login"
            className="flex max-h-screen items-center justify-center"
          />
        </div>
        <div className="ml-10 flex w-72 flex-col justify-center space-y-4 font-LexendDeca">
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
          <button
            className="rounded-md bg-[#06439F] py-2 font-light text-white"
            onClick={() => {
              navigate('/');
            }}
          >
            Login
          </button>
          <button
            className="rounded-md border border-[#06439F] bg-[#ffffff] py-2 font-light text-[#06439F]"
            onClick={() => {
              navigate('/signup');
            }}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
