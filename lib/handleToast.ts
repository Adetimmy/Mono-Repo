"use client";
import { toast } from "sonner";


export default function useToastNofication(msg: string) {
  return toast(msg);
}
