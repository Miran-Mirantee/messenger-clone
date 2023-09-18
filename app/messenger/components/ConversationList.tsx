"use client";

import clsx from "clsx";
import { MdOutlineGroupAdd } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import useConversation from "@/app/hooks/useConversation";
import { FullConversationType } from "@/app/types";
import ConversationBox from "./ConversationBox";
import { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import { pusherClient } from "@/app/libs/pusher";
import { find } from "lodash";

interface ConversationListProps {
  users: User[];
  initialItems: any[];
}
const ConversationList: React.FC<ConversationListProps> = ({
  users,
  initialItems,
}) => {
  const session = useSession();
  const [items, setItems] = useState(initialItems);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const router = useRouter();
  const { conversationId, isOpen } = useConversation();
  const pusherKey = useMemo(() => {
    return session.data?.user?.email;
  }, [session.data?.user?.email]);
  const accessToken: string =
    "EAANmVDP5Db8BOZCw9xgwz3IoeJimPRBCGBjnYhuoT38GOpolx8nCIxzZCPBDPRmLym0Va9JZBMtvg9xNEQOzlBSyjeKh8wWjIVahkopmWKTFXV3WUaLEHOMXcYjVKbPx5ZAJhZB9jvEgogWaoPVUUN3DzE9FDsv4F31MZCOthUxYiVYfhCR9ToZAZAj2QuLZBYLkrw8lmXP5xOfhu7sLj";
  const pageId: string = "115347698334225";
  const apiVersion: string = "v17.0";

  useEffect(() => {
    console.log(items);
    // const list = getConversationsList();
    // getConversationsList();
  }, []);

  const getConversationsList = async () => {
    try {
      const response = await fetch(
        `https://graph.facebook.com/${apiVersion}/${pageId}/conversations?fields=participants&platform=messenger&access_token=${accessToken}`
      );
      const data = await response.json();
      console.log("data.data", data.data);
      return data.data;
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const getUsersList = async () => {
    // user's images are suppose to be retrieved here
    // damn you, meta
    const conversList = await getConversationsList();
    const PSIDs: string[] = conversList.map((conver: any) => {
      const PSID = conver.participants.data[0].id;
      return [...[], PSID];
    });
    console.log(PSIDs);
    try {
      const response = await fetch(
        `https://graph.facebook.com/${apiVersion}/${conversList[0].id}?fields=messages&access_token=${accessToken}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getMessageInfo = async (messageId: string) => {
    try {
      const response = await fetch(
        `https://graph.facebook.com/${apiVersion}/${messageId}?fields=id,created_time,from,to,message&access_token=${accessToken}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getUserInfo = async (PSID: string) => {
    try {
      const response = await fetch(
        `https://graph.facebook.com/${apiVersion}/${PSID}?access_token=${accessToken}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <aside
        className={clsx(
          `
          fixed
          inset-y-0
          pb-20
          lg:pb-0
          lg:left-20
          lg:w-80
          lg:block
          overflow-y-auto
          border-r
          border-gray-200
          `,
          isOpen ? "hidden" : "block w-full left-0"
        )}
      >
        <div className="px-5">
          <div className="flex justify-between mb-4 pt-4">
            <div className="text-2xl font-bold text-neutral-800">
              People From Messenger YEEHA!
            </div>
          </div>
          {items.map((item) => (
            <ConversationBox
              key={item.id}
              data={item.participants.data[0]}
              selected={conversationId === item.id}
            />
            // <div key={item.id}>{item.participants.data[0].name}</div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default ConversationList;
