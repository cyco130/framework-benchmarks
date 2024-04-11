import type { MetaFunction } from "@remix-run/node";
import { useSearchParams } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Hello world!" }];
};

export default function Index() {
  const [searchParams] = useSearchParams();

  return <h1>Hello {searchParams.get("name")}!</h1>;
}
