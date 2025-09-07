import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useRouter } from "next/router";


export default function Login() {
const router = useRouter();


async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
e.preventDefault();
const form = e.currentTarget as HTMLFormElement;
const email = (form.elements.namedItem("email") as HTMLInputElement).value;
const password = (form.elements.namedItem("password") as HTMLInputElement).value;
const { user } = await signInWithEmailAndPassword(auth, email, password);
router.push("/");
}


return (
<div className="max-w-md mx-auto p-6">
<h1 className="text-2xl font-semibold mb-4">Login</h1>
<form onSubmit={onSubmit} className="space-y-3">
<input className="w-full border p-2 rounded" name="email" placeholder="Email" type="email" />
<input className="w-full border p-2 rounded" name="password" placeholder="Password" type="password" />
<button className="w-full bg-black text-white r
