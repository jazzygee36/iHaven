// app/verify-email/page.tsx
'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState('Verifying...');

  useEffect(() => {
    const token = searchParams.get('token');

    if (token) {
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/verify-email?token=${token}`)
        .then(async (res) => {
          const data = await res.text();
          if (res.ok) {
            setStatus(data);
            setTimeout(() => {
              router.push('/'); // Redirect to homepage after success
            }, 5000);
          } else {
            setStatus('Verification failed: ' + data);
          }
        })
        .catch(() => {
          setStatus('Something went wrong');
        });
    } else {
      setStatus('Missing verification token');
    }
  }, []);

  return (
    <main className="p-4">
      <h1>{status}</h1>
    </main>
  );
}
