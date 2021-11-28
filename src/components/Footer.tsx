import Logo from '@/assets/img/logo.png';
import BusLogo from '@/assets/img/bus-logo.png';

export default function footer(): JSX.Element {
  return (
    <div className="footer bg-yellow-50 w-full h-36 md:h-28 flex flex-col-reverse md:flex-row items-center justify-between mt-64">
      <img src={Logo} alt="Bus Explorer" className="w-52 h-10 ml-9 mb-6 md:mb-0 block" />
      <img src={BusLogo} alt="Bus Logo" className="w-96 h-28 md:w-80 md:h-20 mr-9 mb-4 md:mb-0 block" />
    </div>
  );
}
