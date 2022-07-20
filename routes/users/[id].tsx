/** @jsx h */
import { h } from "preact";
import { PageProps, Handlers } from "$fresh/server.ts";
import Layout from "../../components/layouts.tsx";

interface Iperson {
  name: string;
}

export const handler: Handlers = {
  async GET(_, ctx) {
    const users = [{ name: "JeanTallu" }, { name: "JeanRigole" }];
    return await ctx.render(users);
  },
};

export default function User({ params, data }: PageProps) {
  // console.log(props);
  return (
    <Layout>
      {data.map((e: Iperson) => (
        <p>{e.name}</p>
      ))}
      {params.id}
    </Layout>
  );
}
