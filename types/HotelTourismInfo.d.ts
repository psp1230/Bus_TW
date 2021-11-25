declare type HotelTourismInfo = {
  /**
   * 旅館民宿代碼
   */
  id: string;

  /**
   * 旅館民宿名稱
   */
  name?: string;

  /**
   * 旅館民宿簡述
   */
  description?: string;

  /**
   * 觀光旅館星級
   */
  grade?: string;

  /**
   * 旅館民宿地址
   */
  address?: string;

  /**
   * 郵遞區號
   */
  zipCode?: string;

  /**
   * 旅館民宿電話
   */
  phone?: string;

  /**
   * 旅館民宿傳真
   */
  fax?: string;

  /**
   * 旅館民宿網站網址
   */
  websiteUrl?: string;

  /**
   * 旅館民宿照片
   */
  picture: ?TourismPicture;

  /**
   * 旅館民宿位置
   */
  position: PointType;

  /**
   * 旅館民宿分類
   */
  class?: string;

  /**
   * 旅館民宿地點簡圖連結網址
   */
  mapUrl?: string;

  /**
   * 房型、價目及數量說明
   */
  spec?: string;

  /**
   * 服務內容介紹
   */
  serviceInfo?: string;

  /**
   * 停車資訊
   */
  parkingInfo?: string;

  /**
   * 所屬縣市
   */
  city?: string;

  /**
   * 觀光局檔案更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
   */
  srcUpdateTime: Date;

  /**
   * 本平台資料更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
   */
  updateTime: Date;
};
