"use server"

import * as z from 'zod'
import {ResetSchema} from "@/schemas";
import {getUserByEmail} from "@/data/user";
import {sendPasswordResetEmail} from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/tokens"

export const reset = async (values: z.infer<typeof ResetSchema>) => {
    const validateFields = ResetSchema.safeParse(values);

    if(!validateFields) {
        return { error: "Invalid Email"}
    }

    // @ts-ignore
    const { email } = validateFields.data;

    const existingUser = await getUserByEmail(email);

    if(!existingUser) {
        return { error: "Email not found!"};
    }

   const passwordResetToken = await generatePasswordResetToken(email);
    console.log(passwordResetToken)
    await sendPasswordResetEmail(
        passwordResetToken.email,
        passwordResetToken.token,
    );

    return { success: "Reset email sent!" }
}