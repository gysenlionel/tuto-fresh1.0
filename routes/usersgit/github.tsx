/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { PageProps, Handlers } from "$fresh/server.ts";
import Layout from "../../components/layouts.tsx";
import SearchGIthubUser from "../../islands/SearchGIthubUser.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const username = url.searchParams.get("q");
    const res = await fetch(`https://api.github.com/users/${username}`);

    if (res.status === 404) {
      return ctx.render(null);
    }

    const user = await res.json();

    return await ctx.render(user);
  },

  async POST(req) {
    const body = await req.json();
    const res = await fetch(`https://api.github.com/users/${body.q}`);
    if (res.status === 404) {
      return new Response(null, { status: 404 });
    }

    const user = await res.json();
    return new Response(JSON.stringify(user));
  },
};

export default function Github({ data }: PageProps) {
  return (
    <Layout>
      <SearchGIthubUser />
    </Layout>
  );
}
