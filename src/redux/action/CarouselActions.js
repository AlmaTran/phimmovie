
import axios from "axios";
import { DOMAIN } from "../../util/Setting/config";
import { SET_CAROUSEL } from "./types/CarouselType";
import { QuanLyPhimService } from "../../Service/quanLyPhimService";
import { quanLyPhimService } from "../../Service/quanLyPhimService";

export const getCarouselAction = () => {
   
  return async (dispatch) => {
      try {
        const result = await QuanLyPhimService.layDanhSachBanner();
  
        dispatch({
            type:SET_CAROUSEL,
            arrImg: result.data.content
        });
  
  
      } catch (errors) {
        console.log('errors', errors);
      }


    };
}