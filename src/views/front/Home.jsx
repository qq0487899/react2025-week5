import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container py-5 text-center">

      <h1 className="fw-bold text-danger mb-3">蝴蝶結專賣店</h1>

      <p className="text-muted fs-5 mb-4">
        我們專注於手作蝴蝶結，提供多款粉色、珍珠、經典黑等設計，
        適合日常穿搭、派對造型或送禮使用。每一個蝴蝶結都用心製作，
        讓妳的造型更甜美可愛。
      </p>

      <p className="text-muted fs-6 mb-4">
        精選熱銷商品，輕鬆挑選心儀款式，為妳的造型增添亮點吧！
      </p>

      <Link to="/product" className="btn btn-danger btn-lg">
        查看全部商品
      </Link>

    </div>
  );
};

export default Home;