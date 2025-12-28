import SideNav from '../SideNav/Index';
import './_main-component.scss';

const MainComponent = () => {
  return(
    <>
      <div className="contaniner-fluid">
        <div className="col-lg-2 col-md-3 col-sm-4">
          <SideNav/>
        </div>
      </div>
    </>
  )
}

export default MainComponent;