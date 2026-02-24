import { Helmet } from 'react-helmet-async';
import LoginForm from './LoginForm';

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Login | Dummy Ticket 365 Admin</title>
      </Helmet>
      <LoginForm />
    </>
  );
}
