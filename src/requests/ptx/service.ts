import { AxiosResponse } from 'axios';
import request from './request';
import CityEnum from '@/enum/CityEnum';

/**
 * 取得全臺觀光景點資料
 * @param city - 縣市
 * @param params - 參數
 */
export function getScenicSpot(params?: Params): Promise<AxiosResponse<ScenicSpotTourismInfo[]>> {
  return request.get<ScenicSpotTourismInfo[]>('/MOTC/v2/Tourism/ScenicSpot?$format=JSON', {
    params,
  });
}

/**
 * 取得指定[縣市]觀光景點資料
 * @param city - 縣市
 * @param params - 參數
 */
export function getScenicSpotByCity(city: CityEnum, params?: Params): Promise<AxiosResponse<ScenicSpotTourismInfo[]>> {
  return request.get<ScenicSpotTourismInfo[]>(
    `/MOTC/v2/Tourism/ScenicSpot/${city}?$format=JSON`, {
      params,
    },
  );
}

/**
 * 取得全臺觀光餐飲資料
 * @param city - 縣市
 * @param params - 參數
 */
export function getRestaurant(params?: Params): Promise<AxiosResponse<RestaurantTourismInfo[]>> {
  return request.get<RestaurantTourismInfo[]>('/MOTC/v2/Tourism/Restaurant?$format=JSON', {
    params,
  },
  );
}

/**
 * 取得指定[縣市]觀光餐飲資料
 * @param city - 縣市
 * @param params - 參數
 */
export function getRestaurantByCity(city: CityEnum, params?: Params): Promise<AxiosResponse<RestaurantTourismInfo[]>> {
  return request.get<RestaurantTourismInfo[]>(
    `/MOTC/v2/Tourism/Restaurant/${city}?$format=JSON`, {
      params,
    },
  );
}

/**
 * 取得全臺觀光旅宿資料
 * @param city - 縣市
 * @param params - 參數
 */
export function getHotel(params?: Params): Promise<AxiosResponse<HotelTourismInfo[]>> {
  return request.get<HotelTourismInfo[]>('/MOTC/v2/Tourism/Hotel?$format=JSON', {
    params,
  });
}

/**
 * 取得指定[縣市]觀光旅宿資料
 * @param city - 縣市
 * @param params - 參數
 */
export function getHotelByCity(city: CityEnum, params?: Params): Promise<AxiosResponse<HotelTourismInfo[]>> {
  return request.get<HotelTourismInfo[]>(
    `/MOTC/v2/Tourism/Hotel/${city}?$format=JSON`,
    {
      params,
    },
  );
}

/**
 * 取得全臺觀光活動資料
 * @param city - 縣市
 * @param params - 參數
 */
export function getActivity(params?: Params): Promise<AxiosResponse<ActivityTourismInfo[]>> {
  return request.get<ActivityTourismInfo[]>(
    '/MOTC/v2/Tourism/Activity?$format=JSON', {
      params,
    },
  );
}

/**
 * 取得指定[縣市]觀光活動資料
 * @param city - 縣市
 * @param params - 參數
 */
export function getActivityByCity(city: CityEnum, params?: Params): Promise<AxiosResponse<ActivityTourismInfo[]>> {
  return request.get<ActivityTourismInfo[]>(
    `/MOTC/v2/Tourism/Activity/${city}?$format=JSON`, {
      params,
    },
  );
}

/**
 * 取得指定[縣市]的公共自行車租借站位資料
 * @param city - 縣市
 * @param params - 參數
 */
export function getBikeStationByCity(city: CityEnum, params?: Params): Promise<AxiosResponse<BikeStation[]>> {
  return request.get<BikeStation[]>(
    `/MOTC/v2/Bike/Station/${city}?$format=JSON`, {
      params,
    },
  );
}

/**
 * 取得動態指定[縣市]的公共自行車即時車位資料
 * @param city - 縣市
 * @param params - 參數
 */
export function getBikeAvailabilityByCity(city: CityEnum, params?: Params): Promise<AxiosResponse<BikeAvailability[]>> {
  return request.get<BikeAvailability[]>(
    `/MOTC/v2/Bike/Availability/${city}?$format=JSON`, {
      params,
    },
  );
}