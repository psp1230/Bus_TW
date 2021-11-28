import SearchBar from '@/components/SearchBar';
import SearchBarPC from '@/components/SearchBarPC';

export default function City(): JSX.Element {
  return (
    <div className="city">
      <div className="mb-40"><SearchBar /></div>
      <div><SearchBarPC /></div>
    </div>
  );
}
