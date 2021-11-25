import Logo from '@/assets/img/logo.png';

export default function Navbar(): JSX.Element {
  return (
    <div className="navbar bg-white w-full h-28 flex items-center justify-center">
      <img src={Logo} alt="Bus Explorer" className="w-96 h-16" />
    </div>
  );
}
