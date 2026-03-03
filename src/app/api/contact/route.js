import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, subject, company, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        { status: 400 },
      );
    }

    const { error } = await supabase
      .from("contact_messages")
      .insert([{ name, subject, company, email, message }]);

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_NOTIFY_EMAIL,
      subject: `New Portfolio message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Portfolio Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        ${subject ? `<p><b>Subject:</b> ${subject}</p>` : ""}
        ${company ? `<p><b>Company:</b> ${company}</p>` : ""}
        <p><b>Message:</b></p>
        <pre style="white-space:pre-wrap;">${message}</pre>
      `,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
