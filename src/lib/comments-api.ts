import type { Comment, CreateCommentInput } from "../types/comments";

const DEFAULT_TIMEOUT_MS = 8000;

function getConfig() {
  const baseUrl = import.meta.env.PUBLIC_COMMENTS_API_BASE_URL;
  const timeout = Number(import.meta.env.PUBLIC_COMMENTS_TIMEOUT_MS ?? DEFAULT_TIMEOUT_MS);

  if (!baseUrl) {
    throw new Error("PUBLIC_COMMENTS_API_BASE_URL is not set.");
  }

  return {
    baseUrl: baseUrl.replace(/\/+$/, ""),
    timeout: Number.isFinite(timeout) ? timeout : DEFAULT_TIMEOUT_MS,
  };
}

async function requestJson<T>(url: string, init: RequestInit = {}, timeoutMs: number): Promise<T> {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, { ...init, signal: controller.signal });
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return await response.json() as T;
  } finally {
    window.clearTimeout(timeoutId);
  }
}

export async function getComments(postSlug: string): Promise<Comment[]> {
  const { baseUrl, timeout } = getConfig();
  const url = new URL(`${baseUrl}/comments`);
  url.searchParams.set("postSlug", postSlug);

  const comments = await requestJson<Comment[]>(url.toString(), { method: "GET" }, timeout);
  return comments.sort((a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf());
}

export async function createComment(input: CreateCommentInput): Promise<Comment> {
  const { baseUrl, timeout } = getConfig();
  return requestJson<Comment>(`${baseUrl}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  }, timeout);
}
