// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from "resend";

const resend = new Resend(process.env.re_W9C3LepG_zwcvSksv8m5pg2jsrdJU3K8E);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Tomiwa <tomiwaaluko02@gmail.com",
      to: ["tomiwaaluko02@gmail.com"],
      subject: "Hello world",
      react: (
        <>
          <p>Email Body</p>
        </>
      ),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
