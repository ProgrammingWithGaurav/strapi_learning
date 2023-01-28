import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Checkout = ({ cart, setCart, setLoading }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const router = useRouter();
  useEffect(() => {
    console.log(cart);
    let myTotal = 0;
    for (let index = 0; index < cart?.length; index++) {
      myTotal = myTotal + cart[index][1];
    }
    setSubtotal(myTotal);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const data = form;
    window.scroll(0, 0)
    setLoading(true)
    setTimeout(() => {
      setForm({ name: "", address: "", email: "", phone: "" });
      setCart([]);
      setSubtotal(0);
      setLoading(false);
      router.push("/success");
    }, 3000);
  };
  return (
    <div>
      <section className="relative text-black body-font">
        <div className="container min-h-screen px-5 py-24 mx-auto">
          <div className="flex flex-col w-full mb-12">
            <h1 className="mb-4 text-2xl font-medium text-black sm:text-3xl title-font">
              Checkout
            </h1>
            <h2 className="text-2xl font-medium">Cart</h2>
            <div className="cart">
              {cart.length
                ? "Your cart details are as follows"
                : `Your cart is empty`}
            </div>

            <ul className="list-decimal px-8">
              {cart?.map((item) => (
                <li key={item[0]}>
                  {item[0]} with a price of {item[1]}
                </li>
              ))}
            </ul>
            <div className="font-bold">subtotal: {subtotal}</div>
          </div>
          <div className="">
            <div className="flex flex-wrap -m-2">
              <div className="w-1/2 p-2 ">
                <div className="relative">
                  <label for="name" className="text-sm leading-7 text-gray-600">
                    Name
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    id="name"
                    value={form.name}
                    name="name"
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2 ">
                <div className="relative">
                  <label
                    for="email"
                    className="text-sm leading-7 text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    onChange={handleChange}
                    type="email"
                    value={form.email}
                    id="email"
                    name="email"
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2 ">
                <div className="relative">
                  <label
                    for="email"
                    className="text-sm leading-7 text-gray-600"
                  >
                    Phone
                  </label>
                  <input
                    type="phone"
                    value={form.phone}
                    onChange={handleChange}
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <div className="relative">
                  <label
                    for="address"
                    className="text-sm leading-7 text-gray-600"
                  >
                    Address
                  </label>
                  <textarea
                    id="address"
                    value={form.address}
                    onChange={handleChange}
                    name="address"
                    className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  ></textarea>
                </div>
              </div>
              <div className="w-full p-2">
                <button
                  disbled={
                    !form.name || !form.address || !form.email || !form.phone
                  }
                  onClick={handleSubmit}
                  className="flex px-8 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
