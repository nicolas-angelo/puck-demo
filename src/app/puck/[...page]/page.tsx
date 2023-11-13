import { Metadata } from "next";
import { notFound } from "next/navigation";
import nextDynamic from "next/dynamic";
import { getPage } from "@/utils/get-page";

const Editor = nextDynamic(() => import("@/components/editor"), {
  ssr: false,
});

type Params = {} | { page: string[] };

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const pathParams = "page" in params ? params.page : [];
  const path = `/${pathParams.join("/")}`;

  return {
    title: "Editing: " + path,
  };
}

export default async function Page({ params }: { params: Params }) {
  const pathParams = "page" in params ? params.page : [];
  const path = `/${pathParams.join("/")}`;

  const data = getPage(path);

  if (!data) {
    return notFound();
  }

  return <Editor path={path} data={data} />;
}
