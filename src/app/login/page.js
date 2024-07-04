'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnClickLogin = (event) => {
    event.preventDefault();
    const data = { email, password };
    router.push('/');
    console.log(data);
  };

  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      <main className='flex w-screen flex-col items-center justify-between gap-y-6'>
        <h1 className='text-6xl font-semibold text-white'>FreeBet</h1>
        <div className='grid w-full max-w-sm items-center gap-2.5'>
          <div className='grid gap-1.5'>
            <Label htmlFor='emailLogin'>Email</Label>
            <Input
              type='email'
              id='emailLogin'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='grid gap-1.5'>
            <Label htmlFor='passwordLogin'>Senha</Label>
            <Input
              type='password'
              id='passwordLogin'
              placeholder='Senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='flex justify-between space-x-1'>
            <Button
              className='grid w-1/2 items-center justify-center'
              variant='link'
            >
              Esqueci a senha
            </Button>
            <Button
              className='w-1/2 hover:bg-gray-400'
              type='submit'
              onClick={handleOnClickLogin}
            >
              Login
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
