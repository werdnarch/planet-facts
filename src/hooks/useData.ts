"use client";

import { useEffect, useState } from "react";

export default function useData() {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const handleFetch = async () => {
      const resp = await fetch("/data.json");
      const json = await resp.json();
      setData(json);
    };

    handleFetch();
  }, []);

  return { data };
}
