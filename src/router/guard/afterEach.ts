import { useGlobalStore } from "@/stores"

export function afterEach(router: { afterEach: (arg0: () => void) => void; }) {
    router.afterEach(() => {
        useGlobalStore().setLoading(false)
    })
}