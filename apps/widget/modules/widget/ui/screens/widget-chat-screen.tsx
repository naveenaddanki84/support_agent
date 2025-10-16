"use client";


import { WidgetHeader } from "@/modules/widget/ui/components/widget-header";
import { Button } from "@workspace/ui/components/button";
import { useAtomValue, useSetAtom } from "jotai";
import { ArrowLeftIcon, MenuIcon } from "lucide-react";
import { contactSessionIdAtomFamily, conversationIdAtom, organizationIdAtom, screenAtom } from "../../atoms/widget-atoms";
import { useAction, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Form, FormField } from "@workspace/ui/components/form";


export const WidgetChatScreen = () => {
  const setScreen = useSetAtom(screenAtom);
  const setConversationId = useSetAtom(conversationIdAtom);

  const conversationId = useAtomValue(conversationIdAtom);
  const organizationId = useAtomValue(organizationIdAtom);
  const contactSessionId = useAtomValue(
    contactSessionIdAtomFamily(organizationId || "")
  );

  const onBack = () => {
      setConversationId(null);
      setScreen("selection");
  };

  const conversation = useQuery(
    api.public.conversations.getOne,
    conversationId && contactSessionId
      ? {
          conversationId,
          contactSessionId,
        } 
      : "skip"
  );

  return (
    <>
      <WidgetHeader className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <Button
            onClick={onBack}
            size="icon"
            variant="transparent"
          >
            <ArrowLeftIcon />
          </Button>
          <p>Chat</p>
        </div>
        <Button
          size="icon"
          variant="transparent"
        >
          <MenuIcon />
        </Button>
      </WidgetHeader>
      <div className="flex-1 flex flex-col">
        {JSON.stringify(conversation)}
      </div>
      </>
  );
};
