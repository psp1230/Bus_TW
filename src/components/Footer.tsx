import Logo from '@/assets/img/logo.png';
import BusLogo from '@/assets/img/bus-logo.png';

export default function footer(): JSX.Element {
  return (
    <div className="footer bg-yellow-50 w-full h-28 flex items-center justify-between">
      <img src={Logo} alt="Bus Explorer" className="w-80 h-14 ml-9" />
      <img src={BusLogo} alt="Bus Logo" className="w-80 h-20 mr-9" />
    </div>
  );
}
