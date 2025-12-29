import './_products.scss';
import shop1 from '../../assets/images/shop/shop-1.jpg';
import shop2 from '../../assets/images/shop/shop-2.jpg';
import shop3 from '../../assets/images/shop/shop-3.jpg';
import shop4 from '../../assets/images/shop/shop-4.jpg';
import shop5 from '../../assets/images/shop/shop-5.jpg';
import shop6 from '../../assets/images/shop/shop-6.jpg';

const images = {
  "shop-1.jpg": shop1,
  "shop-2.jpg": shop2,
  "shop-3.jpg": shop3,
  "shop-4.jpg": shop4,
  "shop-5.jpg": shop5,
  "shop-6.jpg": shop6,
};

const Products = () => {
  const productData = [
    {
      pName: "Jacket",
      price: 45,
      img: "shop-1.jpg"
    },
    {
      pName: "Purse",
      price: 50,
      img: "shop-2.jpg"
    },
    {
      pName: "Dress",
      price: 38,
      img: "shop-3.jpg"
    },
    {
      pName: "Denim",
      price: 42,
      img: "shop-4.jpg"
    },
    {
      pName: "Boots",
      price: 65,
      img: "shop-5.jpg"
    },
    {
      pName: "Bag",
      price: 35,
      img: "shop-6.jpg"
    }
  ]

  return(
    <>
    {
      productData.map((product,key) => {
        return(
              <div className="mx-5 p-3 col-lg-3 col-md-6 product-card">
                <div className='product-image-container'>
                  <img src={images[product.img]} alt="" />
                </div>
                <div className='product-info'>
                  <h5><a href="">{product.pName}</a></h5>
                  <p className='product-price'>${product.price}</p>
                </div>
              </div>
        )
      })
    }

    </>
  )
}

export default Products;