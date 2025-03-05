"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const useValidItemName = (): void => {
  const router = useRouter();

  useEffect(() => {
    router.push("/404");
  }, [router]);
};
