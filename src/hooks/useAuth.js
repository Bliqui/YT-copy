import {useSelector} from "react-redux";

export function useAuth() {
    const {email, token, id} = useSelector(state => state.userReducer);

    return {
        isAuth: !!email,
        email,
        token,
        id,
    }
}