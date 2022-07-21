/** @jsx h */
import { h } from "preact";
import { PageProps, Handlers } from "$fresh/server.ts";
import Layout from "../../components/layouts.tsx";

interface IUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string | null;
  hireable: string | null;
  bio: string;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}

export const handler: Handlers = {
  async GET(_, ctx) {
    const { username } = ctx.params;
    const res = await fetch(`https://api.github.com/users/${username}`);

    if (res.status === 404) {
      return ctx.render(null);
    }

    const user = await res.json();

    return await ctx.render(user);
  },
};

export default function User({ params, data }: PageProps) {
  console.log(data);
  const user: IUser = data;
  return (
    <Layout>
      <div>
        <a href={user.html_url} target="_blank">
          <p>{user.login}</p>
          <img src={user.avatar_url} alt={user.login} />
        </a>
      </div>
    </Layout>
  );
}
