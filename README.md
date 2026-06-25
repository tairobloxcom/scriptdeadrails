# GitHub Pages Static - Dead Rails

Bộ code đã được chuyển từ HTML WordPress sang bản static chạy trên GitHub Pages.

## Cách dùng

1. Upload `index.html` lên root repo GitHub.
2. Vào **Settings → Pages**.
3. Chọn branch `main` và folder `/root`.
4. Save và mở link GitHub Pages.

## Nội dung đã xử lý

- Giữ lại giao diện chính: header, bảng thông tin, nút tải, nội dung bài viết, FAQ, author box.
- Bỏ phần admin bar WordPress, wpDiscuz/comment form, shortcode edit block, script/plugin thừa.
- Sửa nút tải để không lỗi CORS/AJAX khi chạy trên GitHub Pages.
- Tối ưu responsive mobile.
- Giữ meta SEO, Open Graph, Twitter Card và Schema JSON-LD từ bài gốc.

Nguồn canonical: https://tairoblox.com/dead-rails/
