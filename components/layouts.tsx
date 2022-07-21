/** @jsx h */
import { h } from "preact";

export default function layouts({ children }: any) {
  return (
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/users/2">Users2</a>
        <a href="/usersgit/github">Users2</a>
      </nav>
      {children}
    </div>
  );
}
