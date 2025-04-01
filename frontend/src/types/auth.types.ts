export interface GenericResponse {
  success: boolean;
  message: string;
}
export interface LoginResponse extends GenericResponse {
  userId: string;
}
export interface VerifyOTPResponse extends GenericResponse {
  user: UserState;
}
export interface UserState {
  id: string;
  email: string;
  name: string;
}
export interface AuthState {
  user: UserState | null;
  isAuthenticated: boolean;
}
export interface LoginRequest {
  email: string;
  password: string;
}
export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}
export interface VerifyOTPRequest {

}