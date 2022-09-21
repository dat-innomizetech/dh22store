import './styles/style.scss';
import 'bootstrap/dist/css/bootstrap.css';

import logo from './assets/images/logo-shopee.png';
import SideBar from './components/SideBar';
import Product from './components/Product';

function App() {
  return (
    <>
      <div className="main-bg text-white">
        <div className='container mx-auto'>
          <div className='ms-auto d-flex justify-content-between p-3 pb-0'>
            <div className='d-flex'>
              <span className='p-2 cursor-pointer'>Kênh Người Bán</span>
              <span className='p-2 cursor-pointer'>Trở thành Người bán Shopee</span>
              <span className='p-2 cursor-pointer'>Tải ứng dụng</span>
              <span className='p-2 cursor-pointer'>Kết nối</span>
            </div>
            <div className='d-flex'>
              <span className='p-2 cursor-pointer'>Thông báo</span>
              <span className='p-2 cursor-pointer'>Hỗ trợ</span>
              <select className="form-select border-0 width-fit-content main-bg text-white" defaultValue={0}>
                <option value={0}>Tiếng Việt</option>
                <option value="1">English</option>
              </select>
              <span className='p-2 cursor-pointer'>Đăng ký</span>
              <span className='p-2 cursor-pointer'>Đăng nhập</span>
            </div>
          </div>
          <div className='d-flex align-items-center p-3 pt-0'>
            <img className='mb-2' src={logo} width={162} height={80} />
            <div className="input-group mb-0 mx-2">
              <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button className="btn btn-outline-secondary d-flex align-items-center main-bg border border-light" type="button" id="button-addon2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search main-bg text-white" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </div>
        </div>
      </div>

      <div className='container'>
        <h4>Danh mục sản phẩm</h4>
        <div className='row'>
          <div className='col-lg-3'>
            <SideBar />
          </div>
          <div className='col-lg-9'>
            <div className='row p-4'>
              <div className='col-3 mb-4'>
                <Product />
              </div>
              <div className='col-3'>
                <Product />
              </div>
              <div className='col-3'>
                <Product />
              </div>
              <div className='col-3'>
                <Product />
              </div>
              <div className='col-3'>
                <Product />
              </div>
              <div className='col-3'>
                <Product />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;