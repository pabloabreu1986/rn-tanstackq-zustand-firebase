import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'

const context = `FirebaseClient`

export type FirebaseUser = FirebaseAuthTypes.User | null
export const loginWithEmailAndPassword = async (email: string, password: string): Promise<FirebaseAuthTypes.User> => {
  try {
    const { user } = await auth().createUserWithEmailAndPassword(email, password)
    return user
  } catch (e) {
    console.log(`Error on: ${context}`, JSON.stringify(e))
    throw new Error(String(e))
  }
}
