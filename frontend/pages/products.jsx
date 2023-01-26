import Link from "next/link";
import React from "react";

const Products = (props) => {
  return (
    <div className="container mx-auto px-4">
      <section className="text-gray-600 body-font">
        <div className="container px-5 md:py-24 mx-auto">
          <div className="flex flex-wrap w-full md:mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Product List - MyShop
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {props?.products?.data.map((item) => (
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-96 m-auto mb-[23px] rounded w-full object-center"
                    src={
                      (item.attributes.image.data &&
                        item.attributes.image.data.attributes.name) ||
                      ""
                    }
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    {item.attributes.title}
                  </h3>
                  <div className="bg-red-800 bg-green-800 bg-purple-800" />
                  <button
                    className={
                      'border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none"></button' +
                      `bg-${item.attributes.color}-800`
                    }
                  />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    {item.attributes.title}
                  </h2>
                  <p className="leading-relaxed text-base">
                    {item.attributes.description}
                  </p>
                  <Link href={`/product/${item.attributes.slug}`}>
                    <button className="my-2 text-white bg-indigo-500 border-0 py-1 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Buy now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  let headers = {
    Authorization:
      "Bearer 09acbdd06100e7a91dcfbf7331e3278daf30a2cb05e0979802d7324b448f3b2ed6ace3635bd51a5a6e2d8e848f10a1f4dc8557da05de708709c438f258c0a72a5c7f635c213cbcdbcc8953e9c8f41edfaf46fac9ea3720d7f1cdd40c02ca95918af58247423b946a4662bffe5ad75077d95be320bf57d013371f969fd268cb28",
  };
  let a = await fetch("http://localhost:1337/api/products?populate=*d", {
    headers: headers,
  });
  let products = await a.json();
  console.log(products);

  return {
    props: { products: products },
  };
}

export default Products;
