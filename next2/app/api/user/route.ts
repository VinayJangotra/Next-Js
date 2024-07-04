import { NextRequest } from "next/server";

export async function GET() {
  return Response.json({ username: "harkirat", email: "harkirat@gmail.com" });
}


// Get the bdy from the user
export async function POST(req:NextRequest){
  const body = await req.json();
  console.log(body);
  return Response.json({ message: "User created"});
}