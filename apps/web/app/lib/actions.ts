'use client';

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import firebase_app from './firebase';
import { doc, getFirestore, setDoc, getDoc } from 'firebase/firestore';

export const auth = getAuth(firebase_app);

const db = getFirestore(firebase_app);

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = {
      uid: result.user.uid,
      email: result.user.email,
      displayName: result.user.displayName,
      photoURL: result.user.photoURL,
    };

    const userRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      await setDoc(userRef, {
        email: user.email,
        mobile: '',
        collegeName: '',
        year: '',
      });
    }

    return {
      success: true,
      user,
    };
  } catch (error: any) {
    console.error('Error signing in with Google:', error);
    return {
      success: false,
      error: error.message,
    };
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error: any) {
    console.error('Error signing out:', error);
    return {
      success: false,
      error: error.message,
    };
  }
};
