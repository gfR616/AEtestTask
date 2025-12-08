export interface User {
  user: string
  password: string
  name: string
  role: 'ADMIN' | 'USER'
}

export interface Order {
  id: string
  name: string
  address: string
  date: string
  status: OrderStatus
  comment: string
}
export type OrderStatus = 'Новый' | 'Выполнен'

export interface NewOrderPayload {
  name: string
  address: string
  date: string
  status: 'Новый'
  comment: string
}

export interface BaseState {
  isLoading: boolean
  error: string | null
}

export interface OrdersState extends BaseState {
  orders: Order[]
}

export interface AuthState extends BaseState {
  user: User | null
}

export type ToastType = 'success' | 'error' | 'info'

export interface Toast {
  id: string
  message: string
  type: ToastType
}
