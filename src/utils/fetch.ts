/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable prettier/prettier */
import fetch from 'isomorphic-unfetch'

export default async function <JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init)
  return res.json();
}
