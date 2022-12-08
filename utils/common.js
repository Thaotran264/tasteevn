export const formatter = new Intl.NumberFormat("vi-VI", {
  style: "currency",
  currency: "VND",
});

export const getStatus = (status) => {
  switch (status) {
    case 0:
      return 'Lưu nháp';
      case 1:
      return 'Hoàn thành';
      case 2:
      return 'Đã xóa';
      case 3:
      return 'Đang giao';
      case 4:
      return 'Đang lấy hàng ';
      default:
        return 'Đơn mới'
  }
}