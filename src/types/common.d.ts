declare type NameType = {
  /**
   * 中文繁體名稱
   */
  zhTw?: string;

  /**
   * 英文名稱
   */
  en?: string;
};

declare type TourismPicture = {
  /**
   * 照片連結網址1
   */
  pictureUrl1?: string;

  /**
   * 照片說明1
   */
  pictureDescription1?: string;

  /**
   * 照片連結網址2
   */
  pictureUrl2?: string;

  /**
   * 照片說明2
   */
  pictureDescription2?: string;

  /**
   * 照片連結網址3
   */
  pictureUrl3?: string;

  /**
   * 照片說明3
   */
  pictureDescription3?: string;
};

declare type PointType = {
  /**
   * 位置經度(WGS84)
   */
  positionLon: ?number;

  /**
   * 位置緯度(WGS84)
   */
  positionLat: ?number;

  /**
   * 地理空間編碼
   */
  geoHash?: string;
};

declare type Params = {
  /**
   * 挑選
   */
  'select'?: any;

  /**
   * 過濾
   */
  'filter'?: any;

  /**
   * 排序
   */
  'orderby'?: any;

  /**
   * 取前幾筆
   */
  'top'?: number;

  /**
   * 跳過前幾筆
   */
  'skip'?: number;

  /**
   * 空間過濾，語法為 nearby({Lat},{Lon},{DistanceInMeters})，例如 nearby(25.047675, 121.517055, 100)
   */
  'spatialFilter'?: any;
};


declare type BikeFormType = {
  ubike1?: boolean,
  ubike2?: boolean,
};


declare type BikeStatusFormType = {
  normal?: boolean,
  runout?: boolean,
  'full-rent'?: boolean,
  'stop-rent'?: boolean,
};

type SearchResultItem = BikeStation & { serviceStatus?: 0 | 1 | 2, availableRentBikes?: number, availableReturnBikes?: number };

declare type AreaCategories = '台北市' | '中部地區' | '南部地區' | '東部地區' | '離島地區';
