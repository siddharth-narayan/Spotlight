import { createAuthClient } from "better-auth/react"
import { inferAdditionalFields } from "better-auth/client/plugins";
import { adminClient } from "better-auth/client/plugins"
import type { auth } from "@/lib/auth";

export const { signIn, signUp, useSession, updateUser } = createAuthClient(
    {
        /** the base url of the server (optional if you're using the same domain) */
        baseURL: "http://localhost:3000",
        plugins: [inferAdditionalFields<typeof auth>()]
    }
)