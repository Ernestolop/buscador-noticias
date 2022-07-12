import axios from 'axios';
import {createContext, useState, useEffect} from 'react';

const NoticiasContext = createContext();


const NoticiasProvider = ({children}) => {

  const [categoria, setCategoria] = useState('general');
  const [noticias, setNoticias] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalNoticias, setTotalNoticias] = useState(0);

  useEffect(() => {
    const consultarAPI = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;

        const { data } = await axios(url);
        setNoticias(data.articles);
        setTotalNoticias(data.totalResults);
        setPagina(1);
    }
    consultarAPI()
}, [categoria]) 

  useEffect(() => {
    const consultarAPI = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&page=${pagina}&apiKey=${import.meta.env.VITE_API_KEY}`;

        const { data } = await axios(url);
        setNoticias(data.articles);
        setTotalNoticias(data.totalResults);
    }
    consultarAPI()
}, [pagina]) 
  

  const handleChangeCategoria = e => {
    setCategoria(e.target.value);
  };

  const handleChangePagina = (e, v) => {
    setPagina(v);
  };

  return (
    <NoticiasContext.Provider
    value={{
      categoria,
      handleChangeCategoria,
      noticias,
      totalNoticias,
      handleChangePagina,
      pagina
    }}
    >
        {children}
    </NoticiasContext.Provider>
  )
}

export default NoticiasContext;
export {NoticiasProvider};