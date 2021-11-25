
declare type BikeStation = {
  /**
   * 站點唯一識別代碼，規則為 {業管機關代碼} + {StationID}，
   * 其中 {業管機關代碼} 可於Authority API中的AuthorityCode欄位查詢 ,
   */
  stationUID?: string;
  /**
   * 站點代碼
   */
  stationID?: string;
  
  /**
   * 業管單位代碼
   */
  authorityID?: string;
  
  /**
   * 站點名稱
   */
  stationName?: NameType;
  
  /**
   * 站點位置
   */
  stationPosition?: PointType;

  /**
   * 站點地址
   */
  stationAddress?: NameType;

  /**
   * 站點描述
   */
  stopDescription?: string;

  /**
   * 可容納之自行車總數
   */
  bikesCapacity?: number;

  /**
   * 服務類型 : [1:'YouBike1.0',2:'YouBike2.0'] ,
   */
  serviceType?: 1 | 2;

  /**
   * 來源端平台資料更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz) ,
   */
  srcUpdateTime?: string;

  /**
   * 資料更新日期時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
   */
  updateTime: Date;
  
};
