'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import firebase_app from '../../lib/firebase';
import { getFirestore } from 'firebase/firestore';
import { useRouter } from 'next/navigation';


const db = getFirestore(firebase_app);

export default function Login() {

  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    collegeName: '',
    year: '',
  });
  const [username, setUsername] = useState<string | null>(null);
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  
  useEffect(() => {
    const auth = getAuth(firebase_app);
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUsername(user.displayName || 'User');
        setProfilePic(user.photoURL || '/placeholder.svg');
        setUserId(user.uid);

        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setFormData({
            email: userDoc.data().email || '',
            mobile: userDoc.data().mobile || '',
            collegeName: userDoc.data().collegeName || '',
            year: userDoc.data().year || '',
          });
        }
      } else {
        router.push('/');
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) {
      console.error('User not logged in');
      return;
    }

    
    try {
      const userDocRef = doc(db, 'users', userId);
      await setDoc(userDocRef, formData, { merge: true });
      router.push('/');
    } catch (error) {
      console.error('Error updating data: ', error);
      
    }
  };

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
                  src={profilePic || '/placeholder.svg'}
                  alt="Profile Picture"
                  width={30}
                  height={30}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl md:text-3xl text-[#AEBCCA] font-semibold">
                {username ? username : 'Loading...'}
              </h1>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 flex flex-col justify-center items-center">
            <div className="space-y-2 border w-[90%] md:w-[521px] border-light-ocean-blue bg-light-ocean-blue rounded-2xl py-3 px-4">
              <label htmlFor="email" className="block text-sm md:text-base text-[#515F73]">
                Email
              </label>
              <input
                id="email"
                type="email"
                readOnly
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full h-[15px] bg-light-ocean-blue text-xs md:text-base text-gray-200 focus:outline-none"
                placeholder="lorem@nitkkr.ac.in"
              />
            </div>

            {/* Mobile Field */}
            <div className="space-y-2 border w-[90%] md:w-[521px] border-light-ocean-blue bg-light-ocean-blue rounded-2xl py-3 px-4">
              <label htmlFor="mobile" className="block text-sm md:text-base text-[#515F73]">
                Mobile No.
              </label>
              <input
                id="mobile"
                type="tel"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="w-full h-[15px] bg-light-ocean-blue text-xs md:text-base text-gray-200 focus:outline-none"
                placeholder="Enter your mobile number"
              />
            </div>

            {/* College Name Field */}
            <div className="space-y-2 border w-[90%] md:w-[521px] border-light-ocean-blue bg-light-ocean-blue rounded-2xl py-3 px-4">
              <label htmlFor="collegeName" className="block text-sm md:text-base text-[#515F73]">
                College Name
              </label>
              <input
                id="collegeName"
                type="text"
                value={formData.collegeName}
                onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                className="w-full h-[15px] bg-light-ocean-blue text-xs md:text-base text-gray-200 focus:outline-none"
                placeholder="Enter your college name"
              />
            </div>

      
            <div className="space-y-2 border w-[90%] md:w-[521px] border-light-ocean-blue bg-light-ocean-blue rounded-2xl py-3 px-4">
              <label htmlFor="year" className="block text-sm md:text-base text-[#515F73]">
                Year
              </label>
              <input
                id="year"
                type="text"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                className="w-full h-[15px] bg-light-ocean-blue text-xs md:text-base text-gray-200 focus:outline-none"
                placeholder="Enter your year"
              />
            </div>

        
            <button
              type="submit"
              className="w-[70%] max-w-[130px] h-[36px] px-0 rounded-3xl bg-light-ocean-blue text-sm md:text-base"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
