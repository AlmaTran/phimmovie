import { SET_DANH_SACH_PHIM, SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU } from "../action/types/QuanLyPhimType";

const stateDefault = {
  arrFilm: [
    {
      maPhim: 1282,
      tenPhim: "Ban tay diet quy",
      biDanh: "ban-tay-diet-quy",
      trailer: "http://www.youtobe.com/embed/uqJ9u7GSaYM",
      hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png",
      moTa: "Newlyweb couple  Ted and Tami-Lynn want to have a baby,but in order to quanlify to be a parent,Ted will have to prove be's a perion in",
      maNhom: "GP00",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
      hot: true,
      dangChieu: false,
      // sapChieu: ture,
    },
    {
        maPhim: 1282,
        tenPhim: "Ban tay diet quy",
        biDanh: "ban-tay-diet-quy",
        trailer: "http://www.youtobe.com/embed/uqJ9u7GSaYM",
        hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png",
        moTa: "Newlyweb couple  Ted and Tami-Lynn want to have a baby,but in order to quanlify to be a parent,Ted will have to prove be's a perion in",
        maNhom: "GP00",
        ngayKhoiChieu: "2019-07-29T00:00:00",
        danhGia: 5,
        hot: true,
        dangChieu: false,
        // sapChieu: ture,
      },
  ],
};

export const QuanLyPhimReducer = (state=stateDefault,action) => {
    switch(action.type) {

        case SET_DANH_SACH_PHIM : {
            state.arrFilm = action.arrFilm;
            return {...state}

        }
        case SET_FILM_DANG_CHIEU: {
            state.arrFilm =action.arrFilm.filter();
        }


        case SET_FILM_SAP_CHIEU: {

        }
        default: return {...state}
    }
};
