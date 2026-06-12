import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <div>
      <button onClick={() => signIn('credentials')}>Login</button>
    </div>
  );
}