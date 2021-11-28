import { useState, useEffect } from 'react';
import changeRoad from '@/assets/img/changeRoad.svg';
import startMark from '@/assets/img/mark2.svg';
import endMark from '@/assets/img/mark.svg';
import searchInput from '@/assets/img/search.svg';

export default function SearchBar(): JSX.Element {
  const [searchChose, setSearchChose] = useState<number>(1);

  function searchStartToEnd(): void {
    setSearchChose(1);
  }
  function searchBusRoad(): void {
    setSearchChose(2);
  }
  function returnSearchBar() {
    if (searchChose === 1) {
      return (
        <div className="bg-green-500 rounded-b-2xl px-5 py-10">
          <div className="flex items-center px-5 mb-6">
            <div className="mr-5">
              <img src={changeRoad} alt="" />
            </div>
            <div className="">
              <div className="flex mb-2 items-center bg-white rounded" style={{ width: '220px', height: '37px' }}>
                <img className="mx-4 w-3 h-5" src={startMark} alt="" />
                <input className="border-0 focus:ring-0 focus:border-black rounded" placeholder="選擇起點" type="text" style={{ height: '37px' }} />
              </div>
              <div className="flex items-center bg-white rounded" style={{ width: '220px', height: '37px' }}>
                <img className="mx-4 w-3 h-5" src={endMark} alt="" />
                <input className="border-0 focus:ring-0 focus:border-black rounded" placeholder="選擇目的地" type="text" style={{ height: '37px' }} />
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-5">
            <button className="px-4 py-1 text-green-800 bg-white rounded-l-lg border-r border-green-800">立刻出發</button>
            <button className="px-4 py-1 text-green-800 bg-white border-r border-green-800">出發時間</button>
            <button className="px-4 py-1 text-green-800 bg-white rounded-r-lg">抵達時間</button>
          </div>
          <div>
            <button className="px-32 py-3 bg-blue-900 text-white rounded-3xl">搜尋</button>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-green-500 rounded-b-2xl px-5 py-10">
        <div className="flex mb-2 items-center bg-white rounded mb-5" style={{ width: '295px', height: '37px' }}>
          <img className="mx-4 w-4 h-5" src={searchInput} alt="" />
          <input className="border-0 focus:ring-0 focus:border-black rounded w-60" placeholder="查公車/客運路線" type="text" style={{ height: '37px' }} />
        </div>
        <div className="flex justify-center mb-5">
          <button className="px-4 py-1 text-green-800 bg-white rounded-l-lg border-r border-green-800">立刻出發</button>
          <button className="px-4 py-1 text-green-800 bg-white border-r border-green-800">出發時間</button>
          <button className="px-4 py-1 text-green-800 bg-white rounded-r-lg">抵達時間</button>
        </div>
        <div className="text-center">
          <button className="px-28 py-3 bg-blue-900 text-white rounded-3xl">找路線</button>
        </div>
      </div >
    );
  }
  return (
    <div className="h-80 m-5" style={{ width: '335px' }}>
      <div className="flex">
        <button className="rounded-t-2xl bg-green-500 text-lg text-white px-5 py-3 text-center" onClick={() => searchStartToEnd()} style={{ width: '167.5px' }}>從起訖點查找</button>
        <button className="rounded-t-2xl bg-green-500 text-lg text-white px-5 py-3 text-center" onClick={() => searchBusRoad()} style={{ width: '167.5px' }}>從公車路線查找</button>
      </div>
      {returnSearchBar()}
    </div >
  );
}
