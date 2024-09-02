import axios from 'axios';
import { useState } from 'react';
import style from './style.module.css';

function Api() {
  const [imagesInfo, setImagesInfo] = useState([]);
  const [userSearch, setUserSearch] = useState('');

  const searchImages = async () => {
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: userSearch,
          client_id: "VOFfyVPRc1aZ72eB_IiyXqY2kQGjKaRribif4gw0_Bo",
        }
      });
      setImagesInfo(response.data.results);
    } catch (error) {
      console.error('Error al buscar imagenes: ', error);
      alert('Oops! Ocurrió un error. Vuelve más tarde :D');
    }
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Buscador de Imágenes</h1>
      <div className={style.searchContainer}>
        <input
          className={style.searchInput}
          type='text'
          placeholder='Buscar imágenes...'
          onChange={(e) => setUserSearch(e.target.value)}
        />
        <button onClick={searchImages} className={style.searchButton}>Buscar</button>
      </div>
      <div className={style.imagesContainer}>
        {imagesInfo.length > 0 ? (
          imagesInfo.map((imageInfo) => (
            <img
              key={imageInfo.id}
              src={imageInfo.urls.small}
              alt={imageInfo.alt_description}
              className={style.image}
            />
          ))
        ) : (
          <p className={style.noImages}>No se encontraron imágenes.</p>
        )}
      </div>
    </div>
  );
}

export default Api;
