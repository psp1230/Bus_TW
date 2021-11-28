
declare type BikeShape = {
  /**
   * 路線名稱
   */
  routeName: string;
  
  /**
   * 業管機關名稱 ( 可能包含多個業管機關 )
   */
  authorityName?: string;
  
  /**
   * 路線所在縣市代碼
   */
  cityCode: string;
  
  /**
   * 路線所在縣市名稱
   */
  city: string;
  
  /**
   * 路線所在鄉鎮名稱（可能包含多個鄉鎮） ,
   */
  town?: string;
  
  /**
   * 路線起點描述
   */
  roadSectionStart?: string;
  
  /**
   * 路線迄點描述
   */
  roadSectionEnd?: string;
  
  /**
   * 自行車道車行方向
   */
  direction?: strinng
  
  /**
   * 自行車道類型
   */
  cyclingType?: string;
  
  /**
   * 自行車道長度
   */
  cyclingLength?: number;
  
  /**
   * 自行車道完工日期時間
   */
  finishedTime: string;
  
  /**
   * 資料更新日期時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
   */
  updateTime: date;
  
  /**
   * well-known text，為路線軌跡資料 ,
   */
  geometry: string; (String);
  
  /**
   * 路線軌跡編碼(encoded polyline)
   */
  encodedPolyline: string;
  
};
