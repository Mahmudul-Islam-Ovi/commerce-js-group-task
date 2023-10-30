import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { image, name, id, price } = product;

  return (
    <div className=" flex justify-center">
      <div className="card card-compact w-60 bg-base-100 shadow-xl">
        <Link to={`/product/${id}`}>
          <figure>
            <img width="150px" src={image?.url} alt="Shoes" />
          </figure>
        </Link>

        <div className="card-body">
          <Link to={`/product/${id}`} className="">
            {name}
          </Link>
          <h2 className="card-title">{price.raw}</h2>
          <div className="card-actions justify-end">
            <Link
              to={`/product/${id}`}
              className="btn w-full text-white font-bold btn-primary"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
