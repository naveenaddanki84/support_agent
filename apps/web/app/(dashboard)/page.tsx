"use client"

import { useMutation, useQuery } from "convex/react";
import {api} from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import {OrganizationSwitcher, UserButton} from "@clerk/nextjs";


export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <>
    <div className="flex items-center justify-center min-h-svh">
        <UserButton />
        <OrganizationSwitcher  hidePersonal={true} />
        <Button onClick={() => addUser()}>Add User</Button>
      
    </div>
      
    
      
    
    </>
  )
}
