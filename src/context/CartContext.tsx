import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface CartItem {
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];

  addToCart: (product: any) => void;
  removeFromCart: (index: number) => void;

  increaseQty: (index: number) => void;
  decreaseQty: (index: number) => void;

  customerName: string;
  setCustomerName: any;

  customerAddress: string;
  setCustomerAddress: any;

  paymentProof: File | null;
  setPaymentProof: any;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: any) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [paymentProof, setPaymentProof] = useState<File | null>(null);

  /* =========================
     LOAD LOCAL STORAGE
  ========================= */

  useEffect(() => {
    const savedCart = localStorage.getItem("bluder-cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  /* =========================
     SAVE LOCAL STORAGE
  ========================= */

  useEffect(() => {
    localStorage.setItem("bluder-cart", JSON.stringify(cart));
  }, [cart]);

  /* =========================
     ADD TO CART
  ========================= */

  const addToCart = (product: any) => {
    setCart((prev) => {
      const existingItem = prev.find(
        (item) => item.name === product.name
      );

      // kalau produk sudah ada → qty bertambah
      if (existingItem) {
        return prev.map((item) =>
          item.name === product.name
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      // kalau belum ada → tambah item baru
      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  /* =========================
     REMOVE
  ========================= */

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  /* =========================
     INCREASE
  ========================= */

  const increaseQty = (index: number) => {
    setCart((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  /* =========================
     DECREASE
  ========================= */

  const decreaseQty = (index: number) => {
    setCart((prev) =>
      prev
        .map((item, i) =>
          i === index
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,

        addToCart,
        removeFromCart,

        increaseQty,
        decreaseQty,

        customerName,
        setCustomerName,

        customerAddress,
        setCustomerAddress,

        paymentProof,
        setPaymentProof,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart harus dipakai di CartProvider");
  }

  return context;
}