import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Render } from "@measured/puck/dist/rsc";
import { getPage } from "@/utils/get-page";
import config from "@/components/puck-config";

export const dynamic = "force-static";

type Params = {} | { page: string[] };

export async function generateMetadata({ params }: { params: Params }) {
  const pathParams = "page" in params ? params.page : [];
  const path = `/${pathParams.join("/")}`;

  return {
    title: getPage(path)?.root.title,
  } as Metadata;
}

export default async function Page({ params }: { params: Params }) {
  const pathParams = "page" in params ? params.page : [];
  const path = `/${pathParams.join("/")}`;

  const data = getPage(path);

  if (!data) {
    return notFound();
  }
  //@ts-ignore
  return <Render config={config} data={data} />;
}
