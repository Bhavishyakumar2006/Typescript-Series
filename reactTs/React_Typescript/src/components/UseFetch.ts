import { useState } from "react";

interface fetchState<G> {
    data: G | null;
    loading: boolean;
    error: string | null
}

export function UseFetch<G>(url:string): fetchState<G> {
    const [state, setState] = useState<fetchState<G>>({
    data: null,
    loading: true,
    error: null
})
  return state
}
