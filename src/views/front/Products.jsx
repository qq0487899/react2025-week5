import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_BASE;
const API_PATH = import.meta.env.VITE_API_PATH;

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/${API_PATH}/products`);
        console.log("API完整資料:", res.data);

        const productArray = Array.isArray(res.data)
          ? res.data
          : res.data.products || res.data.data || [];

        setProducts(productArray);
      } catch (error) {
        console.error("取得產品資料失敗", error);
      }
    };

    getProduct();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100">
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p>
                    <strong>售價：</strong> {product.price} 元
                  </p>
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-primary"
                  >
                    查看更多
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center mt-5">目前沒有商品資料</p>
        )}
      </div>
    </div>
  );
};

export default Product;