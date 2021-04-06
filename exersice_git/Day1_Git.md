**1. Git là gì?**

- Git là một hệ thống quản lý phiên bản phân tán (distributed version control system).
  Git giống các hệ thống quản lý phiên bản khác ở chỗ nó cũng hỗ trợ quản lý code và lịch sử thay đổi. Tuy nhiên, Git ưu việt hơn vì có khả năng tách nhánh (branch), hỗ trợ rất tốt cho teamwork, những việc như phân chia task, tổng hợp code trở nên dễ dàng hơn nhiều.

**2. Repository là gì? Có mấy loại repository?**

- Repository là nơi chứa tất cả mã nguồn cho một dự án được quản lý bởi Git. Bạn cũng có thể hiểu một cách khác là Repository chính khai báo thư mục chứa dự án của bạn trên local hoặc remote. Mỗi repo sẽ có hai cấu trúc dữ liệu chính đó là Object store và Index được lưu trữ ẩn trong thư mục .git
- Có lại loại repository đó là local repository và remote repository.
  Local repository: Là repo được cài đặt trên máy tính của lập trình viên, repo này sẽ đồng bộ hóa với remote repo bằng các lệnh của git.
  Remote repository: Là repo được cài đặt trên server chuyên dụng, điển hình hiện nay là Github.

**3. Làm thế nào để add 1 file vào stage? Làm thế nào để add tất cả các file vào stage?**

- _add 1 file_ : git add _[tên file]_
- _add toàn bộ file_ : git add .

**4.Sự khác nhau giữa lệnh `git commit -m "message"` và `git commit -am "message"`?**

- `git commit -m "message"` : lệnh này chỉ để commit
- `git commit -am "message"`: lệnh này thì vừa add vừa commit
