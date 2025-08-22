<<<<<<< HEAD
import { useState, useEffect } from "react";

export const useDatosApi = (url, datosIniciales) => {
  const [datos, setDatos] = useState([datosIniciales]);
  const [cargando, setCargando] = useState(false);
  const [hayError, setHayError] = useState(false);

  useEffect(() => {
    setCargando(true);
    setHayError(false);
      try {
        fetch(url)
            .then(datos => datos.json())
            .then(respuesta => {
                setDatos(respuesta);
                setCargando(false);
            })
        } catch (error) {
          setHayError(true);
          setCargando(false);
        }
    }, [url])
    const recargar = () => {
      setCargando(true);
      setHayError(false);
      try {
        fetch(url)
          .then(datos => datos.json())
          .then(respuesta => {
            setDatos(respuesta);
            setCargando(false);
          });
      } catch (error) {
        setHayError(true);
        setCargando(false);
      }
    }
    return { datos, cargando, hayError, recargar }
=======
import { useState, useEffect } from "react";

export const useDatosApi = (url, datosIniciales) => {
  const [datos, setDatos] = useState([datosIniciales]);
  const [cargando, setCargando] = useState(false);
  const [hayError, setHayError] = useState(false);

  useEffect(() => {
    setCargando(true);
    setHayError(false);
      try {
        fetch(url)
            .then(datos => datos.json())
            .then(respuesta => {
                setDatos(respuesta);
                setCargando(false);
            })
        } catch (error) {
          setHayError(true);
          setCargando(false);
        }
    }, [url])
    const recargar = () => {
      setCargando(true);
      setHayError(false);
      try {
        fetch(url)
          .then(datos => datos.json())
          .then(respuesta => {
            setDatos(respuesta);
            setCargando(false);
          });
      } catch (error) {
        setHayError(true);
        setCargando(false);
      }
    }
    return { datos, cargando, hayError, recargar }
>>>>>>> 60c8b5e (Primer commit git)
};