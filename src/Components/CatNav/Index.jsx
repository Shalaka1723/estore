import { useSelector } from 'react-redux';
import './_cat-nav.scss';
import categorySlice from '../../Redux/Category/categorySlice.js';

const CatNav = () => {
  const categories = useSelector(categorySlice.getInitialState);

  return(
    <>
      <div className='cat-nav-container container'>
        <ul className=' '>
          {
            categories.map((category)=>{
              return(
                <li className='list-items'><a href="#">{category}</a></li>
              )
            })
          }
        </ul>
      </div>
    </>
  );

}

export default CatNav;