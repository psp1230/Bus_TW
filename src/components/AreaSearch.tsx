import React, { useState } from 'react';
import BusIcon from '@/assets/img/bus-icon.png';
import CityEnum from '@/enum/CityEnum';

type PickedArea = {
  area: AreaCategories,
  city?: CityEnum,
  cityName?: keyof typeof CityEnum,
};

const defaultValue: PickedArea = { area: '台北市' };

export default function AreaSearch(): JSX.Element {
  const [oldStatus, setOldStatus] = useState<PickedArea>(defaultValue);
  const [pickedCityArea, setPickedCityArea] = useState<PickedArea>({ area: '台北市' });

  const [isPicking, setIsPicking] = useState<boolean>(false);
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
    setPickedCityArea(oldStatus);
  }

  return (
    <div className="flex-wrap flex flex-col sm:flex-row sm:items-center sm:justify-between w-4/5 rounded-2xl bg-blue-100 mx-auto pt-5 px-5 pb-10 sm:p-10">
      <div className="flex items-center">
        <img className="w-16 h-16 mr-5" src={BusIcon} alt="bus icon" />
        <p className="font-noto-sans font-bold text-4xl text-white">
          {pickedCityArea.area} {pickedCityArea.cityName && <span>- {pickedCityArea.cityName}</span>}
        </p>
      </div>
      {!isPicking && (
        <button
          className="py-3 mt-5 sm:mt-0 px-4 h-12 w-full sm:w-32 bg-blue-900 rounded-3xl text-white font-noto-sans text-base cursor-pointer"
          onClick={() => {
            setOldStatus(pickedCityArea);
            setIsPicking(true);
          }}
        >
          更換地區
        </button>
      )}
      {isPicking && (
        <div className="mt-10 w-full">
          <div className="flex flex-wrap">
            {Array.from(cityItems).map(([cityArea, enumItems]) => {
              const picked: boolean = cityArea === pickedCityArea.area;
              const buttonTheme = picked ? 'bg-blue-A200 text-white' : 'border border-blue-900 bg-white text-blue-700';
              return (
                <div className="relative" key={cityArea}>
                  <button
                    onClick={() => setPickedCityArea({ area: cityArea })}
                    className={`w-32 mr-5 h-14 rounded-3xl font-noto-sans ${buttonTheme}`}
                  >
                    {cityArea}
                  </button>
                  {(isPicking && picked) && (
                    <select
                      className="absolute -bottom-11 left-3 w-32 rounded-lg"
                      defaultValue={0}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement> & { target: { value: keyof typeof CityEnum } }) => {
                        const cityName = e.target.value;
                        const cityValue  = CityEnum[e.target.value];
                        setPickedCityArea({
                          area: pickedCityArea.area,
                          city: cityValue,
                          cityName,
                        });
                      }}
                    >
                      {enumItems.map((city) => {
                        const cityKeys = Object.keys(CityEnum) as Array<keyof typeof CityEnum>;
                        const targetCity = cityKeys.find((item) => CityEnum[item] === city);
                        return (
                          <option
                            key={city}
                            value={targetCity}
                            className=""
                          >
                            {targetCity}
                          </option>
                        );
                      })}
                    </select>
                  )}
                </div>
              );
            })}
          </div>
          <hr className="my-5 sm:my-10 border-white" />
          <div className="flex flex-col sm:flex-row sm:justify-around">
            <button
              className="px-4 py-3 h-12 rounded-3xl w-full sm:w-80 font-noto-sans text-base text-blue-900 border border-blue-900 box-border bg-white mr-0 sm:mr-5"
              onClick={() => {
                setIsPicking(false);
                rollback();
              }}
            >
              取消
            </button>
            <button
              className="px-4 py-3 h-12 rounded-3xl w-full sm:w-80 font-noto-sans text-base text-white bg-blue-900 mt-5 sm:mt-0"
              onClick={() => {
                setIsPicking(false);
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
