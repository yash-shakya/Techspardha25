"use client";
import { useAuth } from "../lib/context/auth-context";
import { signOutUser } from "../lib/actions";
import { useRouter } from "next/navigation";

export default function UserProfile() {
	const { user } = useAuth();
	const router = useRouter();

	const handleLogout = async () => {
		try {
			const result = await signOutUser();
			if (result.success) {
				router.push("/login");
			}
		} catch (error) {
			console.error("Error logging out:", error);
		}
	};

	if (!user) {
		return (
			<button
				onClick={() => router.push("/login")}
				className="fixed top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm z-50"
			>
				Login
			</button>
		);
	}

	return (
		<div className="fixed top-4 right-4 flex items-center gap-4 z-50">
			<div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2">
				<img
					src={user.photoURL || "/default-avatar.png"}
					alt="Profile"
					className="w-8 h-8 rounded-full border border-white/20"
				/>
			</div>
			<button
				onClick={handleLogout}
				className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm"
			>
				Logout
			</button>
		</div>
	);
}
