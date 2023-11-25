import githublogo from '../assets/images/svg/githublogo.svg';
import mediumlogo from '../assets/images/svg/mediumlogo.svg';

function Footer() {
  return (
    <div className="sticky z-50">
      <div className="mx-auto flex items-center justify-center space-x-80 bg-[#FAFAFA] py-6 font-LexendDeca">
        <div className="font-LexendDeca text-sm font-semibold">
          <span className="text-[#06439F]">Spotlight</span>
          <span className="text-[#FFD600]">Seoul</span>
        </div>
        <span className="text-xs font-light">
          © 2023 Techeer Team Joon Project by SpotlightSeoul
        </span>
        <div className="flex space-x-2">
          <button>
            <img className="w-4" src={githublogo} alt="githublogo" />
          </button>
          <button>
            <img className="w-4" src={mediumlogo} alt="mediumlogo" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
