import { create } from 'zustand'
import { FirebaseUser } from '../../clients/firebase'

export type UserState = {
  loggedIn: boolean
}

type UserAction = {
  authenthicateUser: () => void
  logout: () => void
}

export const useUserStore = create<UserState & UserAction>(set => ({
  loggedIn: false,
  authenthicateUser: () => set({ loggedIn: true }),
  logout: () => set({ loggedIn: false })
}))
