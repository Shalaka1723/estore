import { useDispatch, useSelector } from 'react-redux';
import './_cat-nav.scss';
import categorySlice from '../../Redux/Category/categorySlice.js';
import { useEffect } from 'react';
import { getCategories } from '../../Redux/Category/actions.js';

const CatNav = () => {
  const categories = useSelector(state=>state.categoryReducer.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  //console.log(getCategories);

  return(
    <>
      <div className='cat-nav-container container'>
        <ul className=' '>
          {
          categories.map((category, index) => {
            return (
              <li key={index} className="list-items">
                <a href="#">{category}</a>
              </li>
            );
          })
        }
        </ul>
      </div>
    </>
  );

}

export default CatNav;