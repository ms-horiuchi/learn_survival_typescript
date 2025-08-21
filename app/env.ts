if (!process.env.CAT_API_KEY) {
    console.log("This is a test property.")
    process.env.CAT_API_KEY="DEMO_KEY"
}

export const CAT_API_KEY = process.env.CAT_API_KEY;