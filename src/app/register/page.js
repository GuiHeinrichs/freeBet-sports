'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import PasswordChecklist from 'react-password-checklist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGoogle,
  faSquareXTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [isLoginAbble, setLoginVerification] = useState(false);

  const handleOnClickRegister = (event) => {
    event.preventDefault();
    const data = { email, password, passwordAgain };
    router.push('/');
    console.log(data);
  };

  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      <main className='flex w-screen flex-col items-center justify-between gap-y-6'>
        <h1 className='text-6xl font-semibold text-white'>FreeBet</h1>
        <div className='grid w-full max-w-sm items-center gap-2.5'>
          <div className='grid gap-1.5'>
            <Label htmlFor='emailLogin'>Email de cadastro</Label>
            <Input
              type='email'
              id='emailLogin'
              placeholder='Dígite seu email'
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
          <div className='grid gap-1.5'>
            <Label htmlFor='passwordLogin'>Confirmação de senha</Label>
            <Input
              type='password'
              id='passwordAgain'
              placeholder='Reescreva sua senha'
              value={passwordAgain}
              onChange={(e) => setPasswordAgain(e.target.value)}
            />
          </div>
          <div className='text-sm text-gray-200'>
            {/* https://github.com/sators/react-password-checklist#readme */}
            <PasswordChecklist
              iconSize={12}
              rules={['minLength', 'specialChar', 'number', 'capital', 'match']}
              minLength={5}
              value={password}
              valueAgain={passwordAgain}
              messages={{
                minLength: 'A senha contém mais de 8 caracteres.',
                specialChar: 'A senha contém caracteres especiais.',
                number: 'A senha contém um número.',
                capital: 'A senha contém uma letra maiúscula.',
                match: 'As senhas coincidem.',
              }}
              onChange={(isValid) => {
                setLoginVerification(isValid);
              }}
            />
          </div>
          <div className='mt-2 flex flex-col items-center justify-center space-y-2'>
            <Button
              disabled={!isLoginAbble}
              className='w-full hover:bg-gray-400'
              type='submit'
              onClick={handleOnClickRegister}
            >
              Registrar-se
            </Button>
            <span className='text-xs text-gray-300'>
              Ou registrar-se usando:
            </span>
            <div className='text-xl'>
              <ul className='flex w-full flex-row items-center justify-between gap-12'>
                <li className=''>
                  <FontAwesomeIcon
                    icon={faGoogle}
                    className='cursor-pointer transition-colors duration-300 hover:text-gray-600'
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className='cursor-pointer transition-colors duration-300 hover:text-gray-600'
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faSquareXTwitter}
                    className='cursor-pointer transition-colors duration-300 hover:text-gray-600'
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
