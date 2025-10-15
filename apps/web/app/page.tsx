"use client"

import { Authenticated ,Unauthenticated} from "convex/react";
import { useMutation, useQuery } from "convex/react";
import {api} from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import {SignInButton, SignOutButton, UserButton} from "@clerk/nextjs";


export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <>
    <Authenticated>
    <div className="flex items-center justify-center min-h-svh">
        <UserButton />
        <Button onClick={() => addUser()}>Add User</Button>
        <p>{JSON.stringify(users)}</p>
    </div>
    </Authenticated>
    <Unauthenticated>
      <div className="flex items-center justify-center min-h-svh">
        <p>Please sign in to continue</p>
        <SignInButton > Sign In</SignInButton>
      </div>
    </Unauthenticated>
    </>
  )
}
