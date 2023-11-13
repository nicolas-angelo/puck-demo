"use client";
import { Puck, type Data } from "@measured/puck";
import config from "@/components/puck-config";

//todo add local storage support
const isBrowser = typeof window !== "undefined";

export default function Client({ path, data }: { path: string; data: Data }) {
  return (
    <Puck
      //@ts-ignore
      config={config}
      data={data}
      onPublish={async (data: Data) => {
        await fetch("/api/publish", {
          method: "post",
          body: JSON.stringify({ data, path }),
        });
      }}
    />
  );
}
