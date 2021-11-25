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
