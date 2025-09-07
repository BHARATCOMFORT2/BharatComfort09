import type { AppProps } from "next/app";
import "../styles/globals.css";
import Link from "next/link";
import { useAuthUser } from "../lib/useAuthUser";


export default function MyApp({ Component, pageProps }: AppProps) {
const { user } = useAuthUser();
return (
<div className="min-h-screen flex flex-col">
<header className="flex items-center justify-between px-6 py-4 border-b bg-white">
<Link href="/" className="font-bold text-xl">GlobeStay</Link>
<nav className="flex items-center gap-4 text-sm">
<Link href="/search">Listings</Link>
<Link href="/stories">Stories</Link>
<Link href="/planner">Planner</Link>
{user ? (
<>
<Link href={user.role === "partner" ? "/dashboard/partner" : "/dashboard/user"}>Dashboard</Link>
<Link href="/logout">Logout</Link>
</>
) : (
<>
<Link href="/login">Login</Link>
<Link href="/register" className="px-3 py-1 rounded bg-black text-white">Sign up</Link>
</>
)}
</nav>
</header>
<main className="flex-1">
<Component {...pageProps} />
</main>
<footer className="text-center text-xs text-gray-500 py-6 border-t">© {new Date().getFullYear()} GlobeStay</footer>
</div>
);
}
