import AuthView from '@/views/Auth.vue'
import Auth from '@/components/auth/auth.vue'
import SignIn from '@/components/auth/sign-in.vue'
import SignUp from '@/components/auth/sign-up.vue'
import forgotPassword from '@/components/auth/forgot-password.vue'
import resetPassword from '@/components/auth/reset-password.vue'

export default {
    path: '/',
    name: 'home',
    component: AuthView,
    children: [
        {
            path: '/sign-in',
            name: 'signIn',
            component: SignIn
        },
        {
            path: '/sign-up',
            name: 'signUp',
            component: SignUp
        },
        {
            path: '/forgot-password',
            name: 'forgotPassword',
            component: forgotPassword
        },
        {
            path: '/reset-password',
            name: 'resetPassword',
            component: resetPassword
        },
    ]
}