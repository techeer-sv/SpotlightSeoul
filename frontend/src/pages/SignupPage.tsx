import LogoImg from '../assets/images/png/Logo.png';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-loginimg w-full bg-[#ffffff]">
      <div className="flex justify-center font-LexendDeca">
        <img
          src={LogoImg}
          alt="signup"
          className="flex max-h-screen items-center justify-center"
        />
        <div className="ml-10 flex w-72 flex-col justify-center space-y-4">
          <div className="mb-3 text-[30pt] font-medium text-[#FFD600]">
            Sign up
          </div>
          <input
            className="rounded-md bg-[#f5f5f5] px-2 py-2 font-light outline-none "
            type="text"
            placeholder="Nickname"
          />
          <input
            className="rounded-md bg-[#f5f5f5] px-2 py-2 font-light outline-none "
            type="text"
            placeholder="ID"
          />
          <input
            className="mb-4 rounded-md bg-[#f5f5f5] px-2 py-2 font-light outline-none"
            type="password"
            placeholder="PassWord"
          />
          <button
            className="rounded-md bg-[#FFD600] py-2 font-light text-[#667085]"
            onClick={() => {
              navigate('/login');
            }}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
