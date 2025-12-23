import { useEffect } from "react";
import { content } from "../content/content";

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = `${title} - ${content.person.name}`;
  }, [title]);
}