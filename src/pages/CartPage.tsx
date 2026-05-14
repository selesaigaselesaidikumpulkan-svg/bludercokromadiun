import { useCart } from "../context/CartContext";
import { toast } from 'react-hot-toast';

export function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,

    customerName,
    setCustomerName,

    customerAddress,
    setCustomerAddress,
  } = useCart();

  const getTotal = () => {
    return cart.reduce((total: number, item: any) => {

      const price = Number(
        item.price.replace(/[^\d]/g, "")
      );

      const qty = item.quantity || 1;

      return total + price * qty;

    }, 0);
  };

  const formatRupiah = (num: number) => {
    return "Rp " + num.toLocaleString("id-ID");
  };

  const handleCheckout = () => {

    // VALIDASI
    if (!customerName || !customerAddress) {
      toast.error(
        "Lengkapi nama dan alamat terlebih dahulu",
        {
          style: {
            background: "#5b2d0c",
            color: "#fff",
            padding: "16px",
            borderRadius: "12px",
            fontWeight: "500",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#5b2d0c",
          },
        }
      );

      return;
    }

    // FORMAT PESAN
    let message =
`Halo Bluder Cokro,

Saya ingin memesan:

`;

    cart.forEach((item: any, i: number) => {

      const qty = item.quantity || 1;

      const price = Number(
        item.price.replace(/[^\d]/g, "")
      );

      const subtotal = price * qty;

      message +=
`- ${i + 1}. ${item.name}
  Jumlah : ${qty}
  Subtotal : ${formatRupiah(subtotal)}

`;
    });

    // TOTAL
    message +=
`========================
TOTAL PEMBAYARAN
${formatRupiah(getTotal())}

`;

    // DATA PEMBELI
    message +=
`Nama Pemesan
${customerName}

`;

    message +=
`Alamat Pengiriman
${customerAddress}
`;

    // ENCODE
    const encodedMessage =
      encodeURIComponent(message);

    // LINK WA
    const url =
      `https://wa.me/6281391233000?text=${encodedMessage}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-brand-cream">

      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-3xl font-bold mb-8">
          Keranjang Belanja
        </h1>

        {cart.length === 0 ? (

          <div className="text-center mt-20">
            <p className="text-gray-500">
              Keranjang masih kosong
            </p>
          </div>

        ) : (

          <div className="grid md:grid-cols-3 gap-8">

            {/* LIST */}
            <div className="md:col-span-2 space-y-4">

              {cart.map((item: any, index: number) => (

                <div
                  key={index}
                  className="flex items-center gap-4 bg-white p-4 rounded-xl shadow"
                >

                  <img
                    src={item.image}
                    className="w-20 h-20 object-cover rounded"
                  />

                  <div className="flex-1">

                    <h2 className="font-bold">
                      {item.name}
                    </h2>

                    <p className="text-sm text-gray-500">
                      {item.price}
                    </p>

                    {/* QTY */}
                    <div className="flex items-center gap-2 mt-2">

                      <button
                        onClick={() =>
                          decreaseQty(index)
                        }
                        className="px-2 bg-gray-200 rounded"
                      >
                        -
                      </button>

                      <span>
                        {item.quantity || 1}
                      </span>

                      <button
                        onClick={() =>
                          increaseQty(index)
                        }
                        className="px-2 bg-gray-200 rounded"
                      >
                        +
                      </button>

                    </div>

                  </div>

                  <button
                    onClick={() =>
                      removeFromCart(index)
                    }
                    className="text-red-500 text-sm hover:underline"
                  >
                    Hapus
                  </button>

                </div>

              ))}

            </div>

            {/* SUMMARY */}
            <div className="bg-white p-6 rounded-xl shadow h-fit">

              <h2 className="font-bold text-lg mb-4">
                Ringkasan Belanja
              </h2>

              <div className="flex justify-between mb-2">

                <span>Total Item</span>

                <span>
                  {cart.reduce(
                    (total: number, item: any) => {
                      return (
                        total +
                        (item.quantity || 1)
                      );
                    },
                    0
                  )}
                </span>

              </div>

              <div className="flex justify-between font-bold text-lg mb-6">

                <span>Total Harga</span>

                <span>
                  {formatRupiah(getTotal())}
                </span>

              </div>

              {/* FORM */}
              <div className="space-y-4 mb-6">

                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  value={customerName}
                  onChange={(e) =>
                    setCustomerName(
                      e.target.value
                    )
                  }
                  className="w-full border rounded-2xl px-4 py-3"
                />

                <textarea
                  placeholder="Alamat Lengkap"
                  value={customerAddress}
                  onChange={(e) =>
                    setCustomerAddress(
                      e.target.value
                    )
                  }
                  className="w-full border rounded-2xl px-4 py-3 h-28"
                />

              </div>

              {/* BUTTON */}
              <button
                onClick={handleCheckout}
                className="w-full bg-green-500 text-white py-3 rounded-full font-medium hover:bg-green-600 transition-all"
              >
                Checkout WhatsApp
              </button>

            </div>

          </div>

        )}
      </div>
    </div>
  );
}