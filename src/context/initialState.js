import { fetchUSer } from "../utils/fetchLocalStorage"

const userInfo = fetchUSer();

export const initialState = {
    user: userInfo,
}