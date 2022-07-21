/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function layouts({ children }: any) {
  return (
    <div>
      <nav class={tw`w-full px-4 py-3 bg-yellow-800 text-white`}>
        <a class={tw`mx-4`} href="/about">
          About
        </a>
        <a class={tw`mx-4`} href="/">
          Home
        </a>
        <a class={tw`mx-4`} href="/users/2">
          Users
        </a>
        <a class={tw`mx-4`} href="/usersgit/github">
          Users2
        </a>
      </nav>
      {children}
    </div>
  );
}
