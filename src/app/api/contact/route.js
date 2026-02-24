import { supabase } from "@/lib/supabase";

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
