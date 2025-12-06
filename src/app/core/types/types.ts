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
export interface Order {
  id: number
  name: string
  address: string
  date: string
  status: string
  comment: string
}
