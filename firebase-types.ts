export type Location = {
country: string;
state: string;
city: string;
address?: string;
geo?: { lat: number; lng: number };
};


export type UserDoc = {
id: string;
name: string;
email: string;
role: "user" | "partner" | "admin" | "superadmin";
photoURL?: string;
createdAt: number;
};


export type Listing = {
id: string;
partnerId: string;
approved: boolean;
type: "hotel" | "restaurant" | "experience";
title: string;
description: string;
location: Location;
pricePerNight?: number;
currency?: string;
images: string[];
amenities?: string[];
rating?: number;
isFeatured?: boolean;
createdAt: number;
};


export type Booking = {
id: string;
listingId: string;
userId: string;
checkIn: string; // ISO date
checkOut: string; // ISO date
guests: number;
status: "pending" | "confirmed" | "cancelled";
totalPrice: number;
currency: string;
createdAt: number;
};
