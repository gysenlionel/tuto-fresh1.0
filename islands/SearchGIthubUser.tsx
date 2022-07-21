/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { PageProps, Handlers } from "$fresh/server.ts";

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
          />
          <button type="submit">Search</button>
        </form>
      </section>
      {user?.name && (
        <section>
          <div>
            <a href={user.html_url} target="_blank">
              <p>{user.login}</p>
              <img src={user.avatar_url} alt={user.login} />
            </a>
          </div>
        </section>
      )}
    </div>
  );
}
