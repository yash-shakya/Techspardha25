'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { auth,signInWithGoogle } from '../../lib/actions'

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    collegeName: '',
    year: '',
  })

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push('/'); 
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true)
      setError('')
      const result = await signInWithGoogle()
      
      if (result.success) {
        router.push('/form')
      } else {
        setError(result.error || 'Failed to sign in')
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="flex items-center justify-center w-full min-h-screen md:min-h-[651px]">
      <div className="rounded-3xl w-[80%] max-w-[648px] h-[80vh] max-h-[651px] flex items-center justify-center bg-ocean-blue/60 shadow-xl">
        <div className="w-full max-w-md p-8">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
          </div>

          <div className="text-center">
            <h2 className="text-lg md:text-xl text-[#6F8294] mb-4">Hey there,</h2>
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#367CFF]">
                <Image
                  src="/placeholder.svg"
                  alt="Profile Picture"
                  width={30}
                  height={30}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl md:text-3xl text-[#AEBCCA] font-semibold">Welcome to Techspardha</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 flex flex-col justify-center items-center">
           
              

            <div className="w-[90%] md:w-[521px] flex items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-4 text-sm text-gray-500"></span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <button
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="w-[90%] md:w-[521px] h-[36px] rounded-3xl bg-white text-sm md:text-base text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <div className="animate-spin">⌛</div>
              ) : (
                <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </>
              )}
            </button>
            
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
            
            <div className="text-center text-sm text-gray-500">
              Sign In with Google{' '}
              
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

