declare type ActivityTourismInfo = {
  /**
   * 活動訊息代碼
   */
  id: string;

  /**
   * 活動名稱
   */
  name?: string;

  /**
   * 活動簡述
   */
  description?: string;

  /**
   * 活動參與對象
   */
  particpation?: string;

  /**
   * 主要活動地點名稱
   */
  location?: string;

  /**
   * 主要活動地點地址
   */
  address?: string;

  /**
   * 活動聯絡電話
   */
  phone?: string;

  /**
   * 活動主辦單位
   */
  organizer?: string;

  /**
   * 活動開始時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
   */
  startTime?: string;

  /**
   * 活動結束時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
   */
  endTime?: string;

  /**
   * 週期性活動執行時間
   */
  cycle?: string;

  /**
   * 非週期性活動執行時間
   */
  nonCycle?: string;

  /**
   * 活動網址
   */
  websiteUrl?: string;

  /**
   * 活動照片
   */
  picture?: TourismPicture;

  /**
   * 活動位置
   */
  position?: PointType;

  /**
   * 活動分類1
   */
  class1?: string;

  /**
   * 活動分類2
   */
  class2?: string;

  /**
   * 活動地圖/簡圖連結網址
   */
  mapUrl?: string;

  /**
   * 交通資訊
   */
  travelInfo?: string;

  /**
   * 停車資訊
   */
  parkingInfo?: string;

  /**
   * 費用標示
   */
  charge?: string;

  /**
   * 備註(其他活動相關事項)
   */
  remarks?: string;

  /**
   * 所屬縣市
   */
  city?: string;

  /**
   * 觀光局檔案更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
   */
  srcUpdateTime: string;

  /**
   * 本平台資料更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
   */
  updateTime: string;
};