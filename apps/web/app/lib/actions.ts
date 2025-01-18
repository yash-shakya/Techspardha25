// app/lib/firebase/auth.ts
'use client'

import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import firebase_app from './firebase';

export const auth = getAuth(firebase_app);

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return {
      success: true,
      user: {
        uid: result.user.uid,
        email: result.user.email,
        displayName: result.user.displayName,
        photoURL: result.user.photoURL,
      }
    };
  } catch (error:any) {
    console.error('Error signing in with Google:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error:any) {
    console.error('Error signing out:', error);
    return {
      success: false,
      error: error.message
    };
  }
};