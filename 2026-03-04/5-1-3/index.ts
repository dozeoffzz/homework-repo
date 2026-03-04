// 1. 기본 원시 타입과 배열
let studentName: string = "최원희";
let studentAge: number = 27;
let isGraduated: boolean = true;
let subjects: string[] = ["interior", "design"];

// 2. 튜플
type Point3D = [number, number, number];

// 3. 리터럴과 유니온
type role = "admin" | "manager" | "user";

// 4. 객체와 Record
type SubjectScores = Record<string, number>;

// 5. 교차 타입 (Intersection)
type BasicUser = {
  name: string;
  age: number;
};
type Contact = {
  email: string;
  phone: number;
};
type EmployeeProfile = BasicUser & Contact;

// 6. 함수 시그니처와 매개변수 타입
const evaluateEmpolyee = (emp: EmployeeProfile): "해고됨" | "승진함" => {
  if (emp.age > 30) return "승진함";
  return "해고됨";
};

// 1. 카테고리(Category) 리터럴 타입
type Category = "electronics" | "clothing" | "food";
// 2. 상품(Product) 인터페이스
type Product = {
  id: number;
  name: string;
  price: number;
  description?: number;
  imageUrl?: string;
  category: Category;
};
// 3. 장바구니 아이템(CartItem) 타입
type CartItem = {
  product: Product;
  quantity: number;
};
// 4. 주문 상태(OrderStatus) 리터럴 타입
type OrderStatus = "pending" | "paid" | "shipped" | "delivered";
// 5. 주문(Order) 인터페이스
interface Order extends Product {
  orderId: number;
  items: CartItem[];
  totalPrice: number;
  status: OrderStatus;
}
