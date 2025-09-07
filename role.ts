export type Role = "user" | "partner" | "admin" | "superadmin";
export const isStaff = (r?: Role) => r === "admin" || r === "superadmin";
