import {GoogleOAuthProvider, useGoogleLogin} from '@react-oauth/google';
import googleImageBtn from "../../static/google-auth.svg"

const MyGoogleLoginInner = () => {

    const onSuccess = async response => {
        console.log(response)
    };
    const onFailure = response => {
        console.log(response)
    };

    const clickHandler = useGoogleLogin({
        flow: 'auth-code',
        onSuccess: onSuccess,
        onError: onFailure
    });

    return (
        <>
            <img src={googleImageBtn} onClick={() => clickHandler()}/>
        </>
    );
};


export const MyGoogleLogin = () => {
    return (
        <GoogleOAuthProvider clientId={'918999706996-qbh11vh8cfm5vrmm34l45rveatuce0l2.apps.googleusercontent.com'}>
            <MyGoogleLoginInner/>
        </GoogleOAuthProvider>
    );
};

