import { GROUPID } from '../util/Setting/config';
import { baseService } from './baseService';

export class quanLyPhimService extends baseService {

    constructor() {
        super();
    }

    layDanhSachBanner = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);   
    }

    layDanhSachPhim = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }
}

export const QuanLyPhimService = new quanLyPhimService();

// export const {layDanhSachBanner} = quanLyPhimService;