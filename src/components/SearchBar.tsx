import { useState, useEffect } from 'react';
import changeRoad from '@/assets/img/changeRoad.svg';
import startMark from '@/assets/img/mark2.svg';
import endMark from '@/assets/img/mark.svg';
import searchInput from '@/assets/img/search.svg';

export default function SearchBar(): JSX.Element {
  const [searchChose, setSearchChose] = useState(1);
  const [searchRoadClass, setSearchRoadClass] = useState('rounded-t-2xl bg-green-500 text-lg text-white px-5 py-3 text-center border border-green-500');
  const [searchBusClass, setSearchBusClass] = useState('rounded-t-2xl bg-white text-lg text-green-500 px-5 py-3 text-center border border-green-500');
  const [startInputValue, setStartInputValue] = useState('');
  const [endInputValue, setEndInputValue] = useState('');
  const [timeChose, setTimeChose] = useState(1);
  const [timeRightClass, setTimeRightClass] = useState('px-4 py-1 text-white bg-green-800 rounded-l-lg border-r border-green-800');
  const [timeStartClass, setTimeStartClass] = useState('px-4 py-1 text-green-800 bg-white border-r border-green-800');
  const [timeArrivalClass, setTimeArrivalClass] = useState('px-4 py-1 text-green-800 bg-white rounded-r-lg border-r border-green-800');
  const hoursArray = new Array(24).fill(0).map((hours, index) => (index + 1 < 10 ? '0' + (index + 1) : index + 1).toString());
  const minArray = new Array(60).fill(0).map((hours, index) => (index + 1 < 10 ? '0' + ((index - 1) + 1) : (index - 1) + 1).toString());

  console.log(hoursArray);
  function searchStartToEnd(): void {
    setSearchChose(1);

    setSearchBusClass('rounded-t-2xl bg-white text-lg text-green-500 px-5 py-3 text-center border border-green-500');
    setSearchRoadClass('rounded-t-2xl bg-green-500 text-lg text-white px-5 py-3 text-center border border-green-500');
  }
  function searchBusRoad(): void {
    setSearchChose(2);

    setSearchRoadClass('rounded-t-2xl bg-white text-lg text-green-500 px-5 py-3 text-center border border-green-500');
    setSearchBusClass('rounded-t-2xl bg-green-500 text-lg text-white px-5 py-3 text-center border border-green-500');
  }
  function changeInputValue(): void {
    setStartInputValue(endInputValue);
    setEndInputValue(startInputValue);
  }
  function timeRight(): void {
    setTimeChose(1);

    setTimeRightClass('px-4 py-1 text-white bg-green-800 rounded-l-lg border-r border-green-800');
    setTimeStartClass('px-4 py-1 text-green-800 bg-white border-r border-green-800');
    setTimeArrivalClass('px-4 py-1 text-green-800 bg-white rounded-r-lg border-r border-green-800');
  }
  function timeStart(): void {
    setTimeChose(2);

    setTimeStartClass('px-4 py-1 text-white bg-green-800 border-r border-green-800');
    setTimeRightClass('px-4 py-1 text-green-800 bg-white rounded-l-lg border-r border-green-800');
    setTimeArrivalClass('px-4 py-1 text-green-800 bg-white rounded-r-lg border-r border-green-800');
  }
  function timeArrival(): void {
    setTimeChose(2);

    setTimeArrivalClass('px-4 py-1 text-white bg-green-800 rounded-r-lg border-r border-green-800');
    setTimeRightClass('px-4 py-1 text-green-800 bg-white rounded-l-lg border-r border-green-800');
    setTimeStartClass('px-4 py-1 text-green-800 bg-white border-r border-green-800');
  }
  function returnTimeSearchInput() {
    if (timeChose === 1) {
      return (
        <div className="mb-4"></div>
      );
    }
    if (timeChose === 2) {
      return (
        <div className="mb-5 text-right">
          <input className='mb-2 rounded' type="date" style={{ width: '295px' }} />
          <div className="flex justify-end">
            <select className="text-green-800 rounded mr-1 ml-4" name="hours">
              {hoursArray.map(item => {
                return (
                  <option value={item} key={item}>{item}</option>
                );
              })}
            </select>
            <div className="text-white self-end mr-2 justify-self-center">時</div>
            <select className="text-green-800 rounded mr-1" name="hours">
              {minArray.map(item => {
                return (
                  <option value={item} key={item}>{item}</option>
                );
              })}
            </select>
            <div className="text-white self-end mr-2 justify-self-center">分</div>
          </div>
        </div>
      );
    }
    if (timeChose === 3) {
      return (
        <div className="mb-5 flex">
          <input className='' type="date" />
          <select className="text-green-800 rounded mr-1" name="hours">
            {hoursArray.map(item => {
              return (
                <option value={item} key={item}>{item}</option>
              );
            })}
          </select>
          <div className="text-white self-end mr-2">時</div>
          <select className="text-green-800 rounded mr-1" name="hours">
            {minArray.map(item => {
              return (
                <option value={item} key={item}>{item}</option>
              );
            })}
          </select>
          <div className="text-white self-end mr-2">分</div>
        </div>
      );
    }
  }
  function returnSearchBar() {
    if (searchChose === 1) {
      return (
        <div className="bg-green-500 rounded-b-2xl px-5 py-10">
          <div className="flex items-center px-5 mb-6">
            <button className="mr-5" onClick={() => changeInputValue()}>
              <img src={changeRoad} alt="" />
            </button>
            <div className="">
              <div className="flex mb-2 items-center bg-white rounded" style={{ width: '220px', height: '37px' }}>
                <img className="mx-4 w-3 h-5" src={startMark} alt="" />
                <input className="border-0 focus:ring-0 focus:border-black rounded" value={startInputValue} placeholder="選擇起點" type="text" onChange={(e) => setStartInputValue(e.target.value)} style={{ height: '37px' }} />
              </div>
              <div className="flex items-center bg-white rounded" style={{ width: '220px', height: '37px' }}>
                <img className="mx-4 w-3 h-5" src={endMark} alt="" />
                <input className="border-0 focus:ring-0 focus:border-black rounded" value={endInputValue} placeholder="選擇目的地" type="text" onChange={(e) => setEndInputValue(e.target.value)} style={{ height: '37px' }} />
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-2">
            <button className={timeRightClass} onClick={() => timeRight()}>立刻出發</button>
            <button className={timeStartClass} onClick={() => timeStart()}>出發時間</button>
            <button className={timeArrivalClass} onClick={() => timeArrival()}>抵達時間</button>
          </div>
          {returnTimeSearchInput()}
          <div>
            <button className="px-32 py-3 bg-blue-900 text-white rounded-3xl">搜尋</button>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-green-500 rounded-b-2xl px-5 py-10">
        <div className="flex items-center bg-white rounded mb-5" style={{ width: '295px', height: '37px' }}>
          <img className="mx-4 w-4 h-5" src={searchInput} alt="" />
          <input className="border-0 focus:ring-0 focus:border-black rounded w-60" placeholder="查公車/客運路線" type="text" style={{ height: '37px' }} />
        </div>
        <div className="flex justify-center mb-2">
          <button className={timeRightClass} onClick={() => timeRight()}>立刻出發</button>
          <button className={timeStartClass} onClick={() => timeStart()}>出發時間</button>
          <button className={timeArrivalClass} onClick={() => timeArrival()}>抵達時間</button>
        </div>
        {returnTimeSearchInput()}
        <div className="text-center">
          <button className="px-28 py-3 bg-blue-900 text-white rounded-3xl">找路線</button>
        </div>
      </div >
    );
  }
  return (
    <div className="h-80 m-5" style={{ width: '335px' }}>
      <div className="flex">
        <button className={searchRoadClass} onClick={() => searchStartToEnd()} style={{ width: '167.5px' }}>從起訖點查找</button>
        <button className={searchBusClass} onClick={() => searchBusRoad()} style={{ width: '167.5px' }}>從公車路線查找</button>
      </div>
      {returnSearchBar()}
    </div >
  );
}
