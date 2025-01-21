'use client'

import { useAuth } from './lib/context/auth-context';
import { signOutUser } from './lib/actions';
import RubikWetHeading from "./ui/techspardha";
import { WallcardData } from './constants/WallCard';
import WallCardGroup from './ui/components/HomePage/WallCardGroup';
import {
  TECHSPARDHA,
  sponsorsData,
  emailPlaceholder,
  buttonText,
  guestCardsData,
} from "./constants/landingpage";
import { EVENTS as eventCardsData } from './constants/eventPage';
import SponsorsCard from "./ui/components/SponsorsCard";
import Guestgroup from "./ui/GuestGroup";
import EventGroup from "./ui/EventsGroup";
import Watermark from "./ui/components/Watermark";
import NotificationCard from "./ui/components/NotificationCard";
import PresentedBy from "./ui/components/PresentedBy";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLogout = async () => {
    try {
      const result = await signOutUser();
      if (result.success) {
        router.push('/');
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // Prevent hydration mismatch by not rendering user-dependent content until mounted
  if (!isMounted) {
    return null; // or a loading skeleton
  }

  return (
    <>
      <div className="fixed top-4 right-4 flex items-center gap-4 z-50">
        {user ? (
          <>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2">
              <Image
                src={user.photoURL || '/default-avatar.png'}
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full"
                priority
              />
              <span className="text-white text-sm">{user.displayName}</span>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => router.push('/login')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm"
          >
            Login
          </button>
        )}
      </div>

      <main>
        <section className="sm:min-h-screen flex flex-col items-center gap-[22px]">
          <RubikWetHeading text={TECHSPARDHA} />
          <h2 className="w-[376.21px] h-[27px] text-center text-[#bdbdc0] text-[22px] font-medium font-['Satoshi Variable'] leading-[33px]">
            Theme for fest!!!!
          </h2>
          <PresentedBy />
          <NotificationCard />
          <Watermark />
        </section>

        <div className="content flex-col flex gap-12">
          <section className="sm:min-h-screen flex flex-col items-center justify-center">
            <EventGroup eventData={eventCardsData} />
          </section>
          <section className="sm:min-h-screen flex flex-col items-center justify-center" id='lectures'>
            <Guestgroup cardsData={guestCardsData} />
          </section>
          <section className="min-h-screen flex flex-col items-center justify-center" id='sponsors'>
            <SponsorsCard
              SponsorsCard={sponsorsData}
              emailPlaceholder={emailPlaceholder}
              buttonText={buttonText}
            />
          </section>
          <section  id='testimonials'>
            <WallCardGroup testimonials={WallcardData} ></WallCardGroup>
          </section>
        </div>
      </main>
    </>
  );
}