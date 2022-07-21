/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { PageProps, Handlers } from "$fresh/server.ts";
import { tw } from "../utils/twind.ts";

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

export default function SearchGIthubUser() {
  const [user, setUser] = useState({} as IUser);
  const [q, setQ] = useState("");
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/usersgit/github", {
      method: "POST",
      body: JSON.stringify({ q }),
    });

    const data = await res.json();
    if (res.ok) {
      setUser(data);
    }
  };

  const handleInput = (e: any) => {
    setQ(e.target.value);
  };

  return (
    <div>
      <section>
        <form onSubmit={onSubmit}>
          <input
            onChange={handleInput}
            value={q}
            type="text"
            name="q"
            placeholder="Search Github user by Usermame"
            class={tw`border rounded shadow-md px-4 py-2 w-72 mt-8`}
          />
          <button
            type="submit"
            class={tw`border rounded shadow-md px-4 py-2 bg-blue-800 text-white ml-4`}
          >
            Search
          </button>
        </form>
      </section>
      {user?.name && (
        <section class={tw`mt-10`}>
          <div>
            <a
              href={user.html_url}
              target="_blank"
              class={tw`flex flex-col justify-center items-center`}
            >
              <p class={tw`text-2xl text-center mb-4`}>{user.login}</p>
              <img
                class={tw`border rounded shadow-md w-36 h-36`}
                src={user.avatar_url}
                alt={user.login}
              />
            </a>
          </div>
        </section>
      )}
    </div>
  );
}
