export interface User {
  user: string
  password: string
  name: string
  role: 'ADMIN' | 'USER'
}
export interface AuthState {
  user: User | null
  isLoading: boolean
  error: string | null
}
export interface Order {
  id: string
  name: string
  address: string
  date: string
  status: string
  comment: string
}
export interface OrdersState {
  orders: Order[]
  isLoading: boolean
  error: string | null
}
export interface NewOrderPayload {
  name: string
  address: string
  date: string
  status: 'Новый'
  comment: string
}
