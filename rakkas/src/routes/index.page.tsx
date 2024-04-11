import { PageProps, useHead } from "rakkasjs";

export default function HomePage({ url: { searchParams } }: PageProps) {
  useHead({ title: "Hello world!" });
  return <h1>Hello {searchParams.get("name")}!</h1>;
}
