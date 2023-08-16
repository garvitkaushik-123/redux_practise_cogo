import Cart from "../components/Cart";

function CartPage() {
  return (
    <div>
      <div className="sticky top-0 w-[30%] bg-gray-100 p-4 -webkit-sticky max-h-[100vh]  overflow-y-auto  no-scrollbar">
        <Cart />
      </div>
    </div>
  );
}

export default CartPage;
