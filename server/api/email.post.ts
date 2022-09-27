import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.NUXT_SENDGRID_API_KEY)

export default defineEventHandler(async (event) => {
  const body = await useBody(event)
  const msg = {
    to: 'adriano.frederico@gmail.com',
    from: body.email,
    subject: `LEAD FROM SITE: ${body.name} - ${body.phone} - ${body.email}`,
    text: body.message
  }
  // let res
  // try {
  //   res = await sgMail.send(msg)
  // } catch (error) {
  //   res = error
  // }
  return {
    msg
  }
})
