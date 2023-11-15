  import { QuanLyPhimService } from "../../Service/quanLyPhimService";
  import { SET_DANH_SACH_PHIM } from "./types/QuanLyPhimType";



  
  export const layDanhSachPhimAction = () => {



    return async (dispatch) => {
      try {
        //Sử dụng tham số
        const result = await QuanLyPhimService.layDanhSachPhim();
        
        //Sau khi lấy dữ liệu từ api về => đưa lên redux
        dispatch({
            type:SET_DANH_SACH_PHIM,
            arrFilm: result.data.content
        });


      } catch (errors) {
        console.log('errors', errors);
      }


    };
  }