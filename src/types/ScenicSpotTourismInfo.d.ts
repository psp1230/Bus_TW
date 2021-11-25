declare type ScenicSpotTourismInfo = {
  /**
   * 景點代碼
   */
  id: string;

  /**
   * 景點名稱
   */
  name?: string;

  /**
   * 景點特色詳細說明
   */
  descriptionDetail?: string;

  /**
   * 景點特色精簡說明
   */
  description?: string;

  /**
   * 景點服務電話
   */
  phone?: string;

  /**
   * 景點地址
   */
  address?: string;

  /**
   * 郵遞區號
   */
  zipCode?: string;

  /**
   * 交通資訊
   */
  travelInfo?: string;

  /**
   * 開放時間
   */
  openTime?: string;

  /**
   * 景點照片
   */
  picture: ?TourismPicture;

  /**
   * 景點地圖/簡圖介紹網址
   */
  mapUrl?: string;

  /**
   * 景點位置
   */
  position: ?PointType;

  /**
   * 景點分類 1
   */
  class1?: string;

  /**
   * 景點分類 2
   */
  class2?: string;

  /**
   * 景點分類 3
   */
  class3?: string;

  /**
   * 古蹟分級
   */
  level?: string;

  /**
   * 景點官方網站網址
   */
  websiteUrl?: string;

  /**
   * 停車資訊
   */
  parkingInfo?: string;

  /**
   * 景點主要停車場位置
   */
  parkingPosition: ?PointType;

  /**
   * 票價資訊
   */
  ticketInfo?: string;

  /**
   * 警告及注意事項
   */
  remarks?: string;

  /**
   * 常用搜尋關鍵字
   */
  keyword?: string;

  /**
   * 所屬縣市
   */
  city?: string;

  /**
   * 觀光局檔案更新時間 (ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
   */
  srcUpdateTime: Date;

  /**
   * 本平台資料更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
   */
  updateTime: Date;
};
