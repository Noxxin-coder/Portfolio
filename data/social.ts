import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Mail, MessageSquare, Twitter } from "lucide-react";

export type SocialLink = {
  label: string;
  /** Shown next to the label. Say the real handle, or say it is not published. */
  handle: string;
  /** Undefined = no real destination yet. Rendered as visibly unset, never as
   *  a link that goes nowhere. */
  href?: string;
  icon: LucideIcon;
};

// Add `href` (and the real handle) as each account becomes public.
export const socials: SocialLink[] = [
  { label: "Email", handle: "Not published yet", icon: Mail },
  { label: "GitHub", handle: "Not published yet", icon: Github },
  { label: "LinkedIn", handle: "Not published yet", icon: Linkedin },
  { label: "Discord", handle: "Not published yet", icon: MessageSquare },
  { label: "X", handle: "Not published yet", icon: Twitter },
];
