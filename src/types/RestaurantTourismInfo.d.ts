declare type RestaurantTourismInfo = {
  /**
   * 餐飲店家代碼
   */
  id: string;

  /**
   * 餐飲店家名稱
   */
  name?: string;

  /**
   * 店家簡述
   */
  description?: string;

  /**
   * 店家地址
   */
  address?: string;

  /**
   * 郵遞區號
   */
  zipCode?: string;

  /**
   * 預約電話
   */
  phone?: string;

  /**
   * 營業時間
   */
  openTime?: string;

  /**
   * 店家網站網址
   */
  websiteUrl?: string;

  /**
   * 店家照片
   */
  picture: ?TourismPicture;

  /**
   * 店家位置
   */
  position: ?PointType;

  /**
   * 店家分類
   */
  class?: string;

  /**
   * 店家地圖/簡圖介紹網址
   */
  mapUrl?: string;

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
  srcUpdateTime: string;

  /**
   * 本平台資料更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
   */
  updateTime: string;

};
