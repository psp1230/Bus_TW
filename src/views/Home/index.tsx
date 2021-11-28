import Banner from './Banner';
import AreaSearch from '@/components/AreaSearch';

export default function Home(): JSX.Element {
  return (
    <div className="home">
      <Banner />
      <div className="mt-14 flex justify-center">
        <AreaSearch />
      </div>
    </div>
  );
}
