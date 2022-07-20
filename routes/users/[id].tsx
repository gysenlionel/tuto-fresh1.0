/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
export default function User({ params }: PageProps) {
  //   console.log(props.params.id);
  return <div>{params.id}</div>;
}
