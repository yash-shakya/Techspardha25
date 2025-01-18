'use client'
import { useAuth } from './lib/context/auth-context';
import { signOutUser } from './lib/actions';
import RubikWetHeading from "./ui/techspardha";
import {
  TECHSPARDHA,
  sponsorsData,
  emailPlaceholder,
  buttonText,
  guestCardsData,
  eventCardsData,
} from "./constants/landingpage";
import SponsorsCard from "./ui/components/SponsorsCard";
import Guestgroup from "./ui/GuestGroup";
import EventGroup from "./ui/EventsGroup";
import Watermark from "./ui/components/Watermark";
import NotificationCard from "./ui/components/NotificationCard";
import PresentedBy from "./ui/components/PresentedBy";
import { useRouter } from 'next/navigation';

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    const result = await signOutUser();
    if (result.success) {
      router.push('/developers/login');
    }
  };

  return (
    <>
      {/* User Profile Section */}
      <div className="fixed top-4 right-4 flex items-center gap-4 z-50">
        {user ? (
          <>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2">
              <img
                src={user.photoURL || '/default-avatar.png'}
                alt="Profile"
                className="w-8 h-8 rounded-full"
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
            onClick={() => router.push('/developers/login')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm"
          >
            Login
          </button>
        )}
      </div>

      <div className="sm:min-h-screen flex flex-col items-center gap-[22px]">
        {/* HERO SECTION */}
        <RubikWetHeading text={TECHSPARDHA} />
        <div className="w-[376.21px] h-[27px] text-center text-[#bdbdc0] text-[22px] font-medium font-['Satoshi Variable'] leading-[33px]">
          Theme for fest!!!!
        </div>
        <PresentedBy />
        <NotificationCard />
        <Watermark />
      </div>

      <div className="content flex-col flex gap-12">
        <div className="sm:min-h-screen flex flex-col items-center justify-center">
          <EventGroup eventData={eventCardsData} />
        </div>
        <div className="sm:min-h-screen flex flex-col items-center justify-center">
          <Guestgroup cardsData={guestCardsData} />
        </div>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <SponsorsCard
            SponsorsCard={sponsorsData}
            emailPlaceholder={emailPlaceholder}
            buttonText={buttonText}
          />
        </div>
      </div>
    </>
  );
}