import { ExchangeService } from "../../services/ExchangeService";
import { exchSliceReducer } from "../slices/exchSlice";
import { AppDispatch } from "../store";

export const fetchExchange = () => async (dispatch: AppDispatch) => {
  try {
    const res = await ExchangeService.getLatest();
    const data = await res.json();

    if (res.status === 200) {
      console.log(data.rates);

      dispatch(exchSliceReducer.actions.setCurrency(data.rates));
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchConvert =
  ( from : string, to: string, amout : number ) =>
  async (dispatch: AppDispatch) => {
    try {
      const res = await ExchangeService.getConvert( from, to, amout );
      const data = await res.json();

      if (res.status === 200) {
        dispatch(exchSliceReducer.actions.setExch(data.result));
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
