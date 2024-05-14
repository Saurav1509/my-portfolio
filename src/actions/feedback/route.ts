"use server"

import client from "../../../db"

export async function feedback(email: string, content: string, rating: number) {
    try {
        const feedbackContent = await client.feedback.create({
            data: {
                email: email,
                content: content,
                rating: rating
            }
        })

        console.log(feedbackContent.id)

        return true;
    }
    catch (e) {
        console.log(e)
        return false;
    }
}