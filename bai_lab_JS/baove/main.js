// Cho một array như sau: arr=[3,5,7,2,6,7,8]
// Câu 1: Tính tổng các phần tử chẵn trong mảng arr
// Câu 2: Tạo ra mảng mới, giữ nguyên các phần tử chẵn, bình phương các phần tử lẻ. Rồi in ra cosole mảng mới.
// Câu 3: Sắp xếp mảng arr theo thứ tự tăng dần
// Câu 4: Đọc dữ liệu từ API https://fakestoreapi.com/products?limit=10 in ra kết quả ra console

arr = [3, 5, 7, 2, 6, 7, 8];
// Câu 1: Tính tổng các phần tử chẵn trong mảng arr
const rl = arr.reduce((start, value) => {
  return start + value;
}, 0);
console.log(rl);
// Câu 2: Tạo ra mảng mới, giữ nguyên các phần tử chẵn, bình phương các phần tử lẻ. Rồi in ra cosole mảng mới.
const rl1 = arr.reduce((start, value) => {
  return [...start, value % 2 === 0 ? value : value * value];
}, []);
console.log(rl1);
// Câu 3: Sắp xếp mảng arr theo thứ tự tăng dần
arr.sort();
console.log(arr);
// Câu 4: Đọc dữ liệu từ API https://fakestoreapi.com/products?limit=10 in ra kết quả ra console
fetch(" https://fakestoreapi.com/products?limit=10")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Cho một đối tượng  như sau:
// const Person=function(name,age){
//     this.name=name
//     this.age=age
// }
// Person.prototype.info=function(){
//     console.log(`Một người có tên ${this.name} hiện nay ${this.age} tuổi`)
// }
// Câu 8: Tạo lại đối tượng Person nhưng sử dụng ES6 class (1đ)
// Câu 9: Tạo một đối tượng Employee kế thừa Person nhưng thêm thuộc tính salary vào constructor. Sau đó chạy method info() (1đ)

const Person = function (name, age) {
  this.name = name;
  this.age = age;
};
Person.prototype.info = function () {
  console.log(`Một người có tên ${this.name} hiện nay ${this.age} tuổi`);
};
class Personnew {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // info() {
  //   console.log(`Một người có tên ${this.name} hiện nay ${this.age} tuổi`);
  // }
}
// Khởi tạo lớp Employee thừa kế từ lớp Person
class Employee extends Personnew {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }
  // work() {
  //   console.log(this.name + " is student");
  // }
  // info1() {
  //   console.log(`Một người có tên ${this.name} và năm nay là sinh viên`);
  // }
}
var employee = new Employee("Tung", 20, 50000);
// employee.ìn1();
// employee.info();
