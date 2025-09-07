import { useForm } from "react-hook-form";
import { auth, db } from "../lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/router";


export default function Register() {
const { register, handleSubmit } = useForm();
const router = useRouter();


async function onSubmit(values: any) {
const { name, email, password, role } = values;
const cred = await createUserWithEmailAndPassword(auth, email, password);
await updateProfile(cred.user, { displayName: name });
await setDoc(doc(db, "users", cred.user.uid), {
id: cred.user.uid,
name,
email,
role,
createdAt: Date.now()
});
router.push(role === "partner" ? "/dashboard/partner" : "/dashboard/user");
}


return (
<div className="max-w-md mx-auto p-6">
<h1 className="text-2xl font-semibold mb-4">Create account</h1>
<form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
<input className="w-full border p-2 rounded" placeholder="Full name" {...register("name", { required: true })} />
<input className="w-full border p-2 rounded" placeholder="Email" type="email" {...register("email", { required: true })} />
<input className="w-full border p-2 rounded" placeholder="Password" type="password" {...register("password", { required: true })} />
<select className="w-full border p-2 rounded" {...register("role", { required: true })}>
<option value="user">User</option>
<option value="partner">Partner</option>
</select>
<button className="w-full bg-black text-white rounded py-2" type="submit">Sign up</button>
</form>
</div>
);
}
