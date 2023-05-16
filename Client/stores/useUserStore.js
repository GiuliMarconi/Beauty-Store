import createStore from 'zustand'
import persist from '../utils/persist'

const useUserStore = createStore(
  persist(
    {
      key: 'user',
      denylist: ['isLoading', 'errorMessage']
    },
    (set) => ({
      isLoading: false,
      errorMessage: '',
      data: {
        username: '',
        Admin: false,
        email: '',
        id: null
      },
      logIn: (userData) => {
        set((state) => ({
          data: userData
        }))
      },
      signIn: (userData) => {
        set((state) => ({
            data: userData
        }))
      }
    })
  )
)
export default useUserStore
