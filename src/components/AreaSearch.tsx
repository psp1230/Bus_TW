import { useState } from 'react';
import BusIcon from '@/assets/img/bus-icon.png';
import CityEnum from '@/enum/CityEnum';

export default function AreaSearch(): JSX.Element {
  const [oldStatus, setOldStatus] = useState<({
    pickedCityArea: AreaCategories,
  })>({ pickedCityArea: '台北市' });
  const [pickedCityArea, setPickedCityArea] = useState<AreaCategories>('台北市');
  const [picking, setPicking] = useState<boolean>(false);
  const cityItems: Map<AreaCategories, CityEnum[]> = new Map([
    ['台北市', [CityEnum.臺北市, CityEnum.新北市, CityEnum.桃園市, CityEnum.基隆市, CityEnum.新竹市, CityEnum.新竹縣, CityEnum.苗栗縣]],
    ['中部地區', [CityEnum.臺中市, CityEnum.彰化縣, CityEnum.南投縣, CityEnum.雲林縣, CityEnum.嘉義縣, CityEnum.嘉義市]],
    ['南部地區', [CityEnum.臺南市, CityEnum.高雄市, CityEnum.屏東縣]],
    ['東部地區', [CityEnum.宜蘭縣, CityEnum.花蓮縣, CityEnum.臺東縣]],
    ['離島地區', [CityEnum.金門縣, CityEnum.澎湖縣, CityEnum.連江縣]],
  ]);

  /**
   * 狀態回溯
   */
  function rollback() {
    setPickedCityArea(oldStatus.pickedCityArea);
  }

  return (
    <div className="flex-wrap flex flex-col sm:flex-row sm:items-center sm:justify-between w-4/5 rounded-2xl bg-blue-100 mx-auto pt-5 px-5 pb-10 sm:p-10">
      <div className="flex items-center">
        <img className="w-16 h-16 mr-5" src={BusIcon} alt="bus icon" />
        <p className="font-noto-sans font-bold text-4xl text-white">
          {pickedCityArea}
        </p>
      </div>
      {!picking && (
        <button
          className="py-3 mt-5 sm:mt-0 px-4 h-12 w-full sm:w-32 bg-blue-900 rounded-3xl text-white font-noto-sans text-base cursor-pointer"
          onClick={() => {
            setOldStatus({
              pickedCityArea: pickedCityArea,
            });
            setPicking(true);
          }}
        >
          更換地區
        </button>
      )}
      {picking && (
        <div className="mt-10 w-full">
          <div className="flex flex-wrap">
            {Array.from(cityItems).map(([cityArea, enumItems]) => {
              const picked: boolean = cityArea === pickedCityArea;
              const buttonTheme = picked ? 'bg-blue-A200 text-white' : 'border border-blue-900 bg-white text-blue-700';
              return (
                <button
                  key={cityArea}
                  onClick={() => setPickedCityArea(cityArea)}
                  className={`w-32 mr-5 h-14 rounded-3xl font-noto-sans relative ${buttonTheme}`}
                >
                  {cityArea}
                </button>
              );
            })}
          </div>
          <hr className="my-10 border-white" />
          <div className="flex justify-around">
            <button
              className="px-4 py-3 h-12 rounded-3xl w-80 font-noto-sans text-base text-blue-900 border border-blue-900 box-border bg-white"
              onClick={() => {
                setPicking(false);
                rollback();
              }}
            >
              取消
            </button>
            <button
              className="px-4 py-3 h-12 rounded-3xl w-80 font-noto-sans text-base text-white bg-blue-900"
              onClick={() => {
                setPicking(false);
              }}
            >
              確定
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
