import { useEffect } from "react";
import Converter from "./components/Converter/Converter";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import { setInputCurrency } from "./store/slices/exchSlice";
import { fetchExchange } from "./store/thunks/fetchExch";
import { fetchCurrentLocation } from "./store/thunks/fetchGeo";
import { GEO_TO_EXCH } from "./utils/constants";
import { getCoords, handleCoordsError } from "./utils/getCoords";
import { Helmet } from 'react-helmet';

function App() {
  const dispatch = useAppDispatch();
  const { userLocation } = useAppSelector((state) => state.geo);

  useEffect(() => {
    getCoords((position: { latitude: string; longitude: string }) =>
      dispatch(fetchCurrentLocation(position))
    );

    dispatch(fetchExchange());
  }, []);

  useEffect(() => {
    if (userLocation) dispatch(setInputCurrency(GEO_TO_EXCH[userLocation]));
  }, [userLocation]);
  const keywords = `Банк, Валюта, Курс`;
  const description = `Приложение для обмена валют`;


  return (
    <div className="container">
      <Helmet>
                <meta charSet="utf-8" />
                <title> Доллар/рубль</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
      </Helmet>

      <Converter />
    </div>
  );
}

export default App;
