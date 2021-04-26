__What are the differences between a variable that is: null, undefined?__
- NULL là 1 giá trị được gắn lại, nó có nghĩa là không có gì.
- UNDEFINED có nghĩa là 1 biến được khai báo, nhưng lại không được gắn bất kì giá trị nào.

__What is use strict? what are the advantages and disadvantages to using it?__
- Use strict dịch sang tiếng việt thì có nghĩa là sử dụng sử nghiêm ngặt. Khi một đoạn lệnh được khai báo use strict thì tất cả các dòng code ở phía dưới dòng khai báo use strict sẽ được quản lý một cách nghiêm ngặt hơn về cú pháp.
- Ưu điểm:
  - Ngăn chặn sử dụng, và throw errors khi người lập trình thực hiện những xử lý được coi là unsafe, những xử lý mà có thể là ngoài ý muốn.
  - Vô hiệu hoá các tính năng có thể gây nhầm lẫn, hoặc không nên được sử dụng.
  - Ngăn chặn sử dụng một số từ mà có thể sẽ được sử dụng làm keywork trong tương lai.
- Nhược điểm : 
   - Không thể sử dụng 1 biến mà không khai báo
   - Báo lỗi ở những assignments vốn không thể thực hiện
   - Báo lỗi khi delete những thứ không thể xoá
   - Các tham số của một hàm không được phép trùng nhau
   - Không thể sử dụng with
   - Không thể định nghĩa function bên trong một statement hay một block
   - Thay đổi cách thức hoạt động của this trong một số trường hợp
   - Không sử dụng được cách viết số thuộc hệ bát phân với tiền tố là 0
   - Hạn chế sử dụng các property caller, callee và arguments trong một số trường hợp

__What are the differences between == and ===? Write an example for each case (if any)?__ 
- == : chỉ so sánh giá trị
- ===: so sánh cả giá trị và kiểu dữ liệu
- Example:
   - 1 == "1" -> true ; 1 === "1" -> false
   
__What are values in the FALSE group?__
- undefined,null,NaN,0,"",false