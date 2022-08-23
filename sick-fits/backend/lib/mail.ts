import { createTransport } from 'nodemailer';

const transport = createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function makeANiceEmail(text: string) {
  return `
    <div style="
    border: 1px solid black;
    padding: 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px
    ">
    <h2>Hello There!</h2>
    <p>${text}</p>
    <p>Faith M. Roberts</p>
    </div>
    `;
}

async function sendPasswordResetEmail(resetToken: string, to: string) {
  const info = await transport.sendMail({
    to,
    from: 'faith@faithroberts.com',
  });
}
