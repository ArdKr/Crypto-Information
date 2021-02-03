import React, { useState, useEffect } from "react";

// Redux
import { useDispatch } from "react-redux";
import { updateCurrencies, updateCurrentCurrency } from "./redux/currencySlice";

import { fetchAllActiveCryptos, fetchCryptoMetadata } from "./api/client";

// Type for api results from fetching  cryptos
type CryptoData = {
  // Where the information about cryptos is hold
  data: object[];
  // Information about the request
  status: object;
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const updateAllCryptos = async () => {
      const apiResults: CryptoData = await fetchAllActiveCryptos();
      // Get crypto information by id (1 = BTC, ...)
      const currentCryptoApiResults = await fetchCryptoMetadata(1);

      // Save all crypto list to the redux store
      dispatch(updateCurrencies(apiResults.data));
      dispatch(updateCurrentCurrency(currentCryptoApiResults.data));
    };

    updateAllCryptos();
  }, [dispatch]);

  return (
    <div className="container mx-auto">
      <h1>Test</h1>
    </div>
  );
};

export default App;
