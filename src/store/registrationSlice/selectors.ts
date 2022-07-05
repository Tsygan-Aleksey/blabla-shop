import { RootStore } from "store";

const getIsAuthSlice = (state: RootStore): {isAuth: Boolean} => state.registration;

export const getIsAuth = (state: RootStore) => getIsAuthSlice(state).isAuth;