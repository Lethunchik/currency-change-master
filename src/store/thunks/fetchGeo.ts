import { GeoService } from "../../services/GeoService";
import { geoSliceReducer } from "../slices/geoSlice";
import { AppDispatch } from "../store";

export const fetchCurrentLocation =
  ({ latitude, longitude }: { latitude: string; longitude: string }) =>
  async (dispatch: AppDispatch) => {
    try {
      const res = await GeoService.getLoc(longitude, latitude);
      const data = await res.json();

      if (res.status === 200) {
        const location =
          data.response.GeoObjectCollection.featureMember[0].GeoObject
            .metaDataProperty.GeocoderMetaData.Address.country_code;
        dispatch(geoSliceReducer.actions.setCurrentLocation(location));
      } else {
        console.log("false");
      }
    } catch (error) {
      console.log(error);
    }
  };
