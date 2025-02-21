import { useState } from "react";
import { myAxios } from "../api/axios"; // Az axios importálása

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Lekérdezés
  const getAdat = async (vegpont, callbackFv) => {
    setLoading(true);
    try {
      const response = await myAxios.get(vegpont);
      callbackFv(response.data); // Visszatér az adat a callback függvénybe
    } catch (err) {
      setError("Hiba történt az adat lekérésekor.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Új adat küldése
  const postAdat = async (vegpont, adat) => {
    setLoading(true);
    try {
      const response = await myAxios.post(vegpont, adat);
      return response.data; // Visszatérhetünk az új adatválasszal
    } catch (err) {
      setError("Hiba történt az adat elküldésekor!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Adat frissítése
  const patchAdat = async (vegpont, id, adat) => {
    setLoading(true);
    try {
      const response = await myAxios.patch(`${vegpont}/${id}`, adat);
      return response.data;
    } catch (err) {
      setError("Hiba történt az adat frissítésekor!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Adat törlés
  const deleteAdat = async (vegpont, id) => {
    setLoading(true);
    try {
      const response = await myAxios.delete(`${vegpont}/${id}`);
      return response.data;
    } catch (err) {
      setError("Hiba történt az adat törlésében!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    getAdat,
    postAdat,
    patchAdat,
    deleteAdat,
  };
};

export default useApi;
