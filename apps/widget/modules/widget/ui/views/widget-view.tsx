"use client";

//import { useAtomValue } from "jotai";
//import { WidgetAuthScreen } from "@/modules/widget/ui/screens/widget-auth-screen";
//import { screenAtom } from "@/modules/widget/atoms/widget-atoms";
//import { WidgetErrorScreen } from "@/modules/widget/ui/screens/widget-error-screen";
//import { WidgetLoadingScreen } from "@/modules/widget/ui/screens/widget-loading-screen";
//import { WidgetSelectionScreen } from "@/modules/widget/ui/screens/widget-selection-screen";
//import { WidgetChatScreen } from "@/modules/widget/ui/screens/widget-chat-screen";
//import { WidgetInboxScreen } from "../screens/widget-inbox-screen";
import {WidgetFooter} from "../components/widget-footer";
import {WidgetHeader} from "../components/widget-header";

interface Props {
  organizationId: string | null;
};

export const WidgetView = ({ organizationId }: Props) => {
  //const screen = useAtomValue(screenAtom);

  
  return (
    // TODO: Confirm whether or not "min-h-screen" and "min-w-screen" is needed
    <main className="min-h-screen min-w-screen flex h-full w-full flex-col overflow-hidden rounded-xl border bg-muted">
      <WidgetHeader >
        <p>Hi there, how can I help you today?</p>
      </WidgetHeader>
      <div className="flex-1">
        widget view: {organizationId}
      </div>
      <WidgetFooter />
    </main>
  );
};
