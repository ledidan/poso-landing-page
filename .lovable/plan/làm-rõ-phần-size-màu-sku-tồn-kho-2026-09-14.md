# Làm rõ phần “Size. Màu. SKU. Tồn kho.”

## Mục tiêu
Người xem hiểu ngay POSO gom các biến thể thời trang rời rạc thành một sản phẩm có cấu trúc và tồn kho rõ ràng.

## Thay đổi
- Chuyển phần minh hoạ thành 3 trạng thái rõ ràng: **Đang rối** → **POSO sắp xếp** → **Đã rõ**.
- Dùng ví dụ thật cho một mẫu áo: bảng màu, hàng size, mã SKU và số lượng tồn theo từng ô.
- Khi cuộn, các nhãn rời sẽ thu về một bảng biến thể; ô sắp hết và hết hàng có màu cảnh báo riêng.
- Hiển thị kết quả cuối rõ hơn: biến thể đang chọn, SKU tương ứng, tồn kho và thông báo trừ kho sau khi bán.
- Tối ưu bố cục 390px: chữ lớn hơn, bảng không bị cắt, animation chỉ dùng chuyển động nhẹ và độ mờ.

## Phạm vi kỹ thuật
- Chỉnh phần minh hoạ hiện có trong `ChaosToControl` và khoảng cách liên quan trên trang chính.
- Giữ nguyên nội dung, form đăng ký và các phần còn lại.
- Kiểm tra trực quan trên màn hình điện thoại và máy tính sau khi hoàn tất.
