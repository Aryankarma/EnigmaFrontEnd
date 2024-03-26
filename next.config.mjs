// next.config.js
export async function rewrites() {
    return [
        {
            source: "/api",
            destination: "http://localhost:4001",
        },
    ]
}