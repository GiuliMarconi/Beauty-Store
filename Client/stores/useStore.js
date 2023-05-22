import {create} from 'zustand'
import {showProduct} from '../src/context/AppProvider.jsx'

// const useStore = create(
//     set => ({
//         productos: [],
//         addProduct: (product) => 
//             set((state) => [... state.productos, product])
//     })
// );

const useStore = create((set) => ({
  data: [],
  fetchData: async () => {
    try {
      const response = await showProduct(); // Reemplaza 'URL_DEL_ENDPOINT' con la URL de tu endpoint de backend
      set({ data: response});
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  },
}));

export {useStore};