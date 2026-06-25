# TaiRoblox - Script Dead Rails GitHub Pages

Bộ mã tĩnh dùng để chạy trang bài viết **Tổng Hợp Script Dead Rails** trên GitHub Pages.

## Cấu trúc

```txt
tairoblox-script-dead-rails-github-pages-y-chang-fixed/
├── index.html
├── README.md
├── robots.txt
├── sitemap.xml
├── .nojekyll
└── assets/
    ├── github-fix.css
    └── github-fix.js
```

## Cách deploy lên GitHub Pages

1. Giải nén file ZIP.
2. Tạo repository GitHub mới.
3. Upload toàn bộ file trong thư mục này lên repo.
4. Đảm bảo `index.html` nằm ở thư mục gốc của repo.
5. Vào `Settings` → `Pages`.
6. Chọn `Deploy from a branch`.
7. Chọn branch `main` và folder `/root`.
8. Bấm `Save`.

## Sau khi deploy

Mở các file sau và đổi `USERNAME` thành username GitHub thật của bạn:

- `robots.txt`
- `sitemap.xml`

Ví dụ:

```txt
https://USERNAME.github.io/tairoblox-script-dead-rails/
```

## Ghi chú

Đây là bản static snapshot từ HTML gốc. Các thành phần phụ thuộc WordPress như admin bar, customizer, AJAX, WP Rocket, Cloudflare beacon và script quản trị đã được loại bỏ để chạy ổn định trên GitHub Pages.

Các ảnh và CSS gốc vẫn hotlink từ `tairoblox.com`. Nếu website gốc chặn hotlink hoặc thay đổi đường dẫn asset, bạn cần tải asset về local và cập nhật lại đường dẫn trong `index.html`.
