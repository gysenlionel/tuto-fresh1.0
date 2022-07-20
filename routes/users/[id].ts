import {Handlers} from "$fresh/server.ts"

export const handler: Handlers ={
    POST(): Response {
        const users = [
            { name: "JeanTallu" }, { name: "JeanRigole" }
        ]
        return new Response(JSON.stringify(users))
    }
}