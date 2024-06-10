import * as yup from 'yup'

export const schemaClientForm = yup
    .object({
        name: yup.string().required(),
        email: yup.string().required(),
        phone_number: yup.string().required(),
        text: yup.string().required(),
    })
