import { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import type { UserDoc } from "./firestore-types";


export function useAuthUser() {
const [user, setUser] = useState<null | (UserDoc & { uid: string })>(null);
const [loading, setLoading] = useState(true);


useEffect(() => {
const unsub = onAuthStateChanged(auth, async (u) => {
if (!u) { setUser(null); setLoading(false); return; }
const ref = doc(db, "users", u.uid);
const snap = await getDoc(ref);
const data = snap.data() as UserDoc | undefined;
if (data) setUser({ ...data, uid: u.uid });
setLoading(false);
});
return () => unsub();
}, []);


return { user, loading };
}
