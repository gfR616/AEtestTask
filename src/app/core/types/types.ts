export interface User {
  user: string
  password: string
  name: string
  role: 'ADMIN' | 'USER'
}
export interface AuthState {
  user: User | null
  loading: boolean
  error: string | null
}
