declare type BikeAvailability = {
  /**
   * 
   * 站點唯一識別代碼，規則為 {業管機關代碼} + {StationID}，其中 {業管機關代碼} 可於Authority API中的AuthorityCode欄位查詢 ,
   */
  stationUID?: string;

  /**
   * 
   * 站點代碼 ,
   */
  stationID?: string;

  /**
   * 
   * 服務狀態 : [0:'停止營運',1:'正常營運',2:'暫停營運'] ,
   */
  serviceStatus?: 0 | 1 | 2;

  /**
   * 
   * 服務類型 : [1:'YouBike1.0',2:'YouBike2.0'] ,
   */
  serviceType?: 0 | 1 | 2;

  /**
   * 
   * 可租借車數 ,
   */
  availableRentBikes?: number;

  /**
   * 
   * 可歸還車數 ,
   */
  availableReturnBikes?: number;

  /**
   * 
   * 來源端平台資料更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz) ,
   */
  srcUpdateTime?: string;

  /**
   * 資料更新日期時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
   */
  updateTime?: Date;

};
