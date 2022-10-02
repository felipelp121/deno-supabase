import { ParamsDTO } from "../dtos/mod.ts";
import { jsonResponse } from "../utils/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js"

type SignUpDTO = {
  email: string;
  password: string;
};

export const signUpRoute = async (request: Request, params: ParamsDTO) => {
  try {
    const body: SignUpDTO = await request.json();
    const email = body.email;
    const password = body.password;
    const db_url = String(Deno.env.get("DB_URL"));

    const db_public_key = String(Deno.env.get("PUBLIC_KEY"));

    const db_secret_key = String(Deno.env.get('SECRET_KEY'));

     

    if (
      !(db_url && db_public_key && db_secret_key)
    ) {
      throw "Faltam keys";
    }

    const supabase = createClient(
      db_url,
      db_public_key,
    );

    const { user, session, error } = await supabase.auth.signUp({
      email,
      password,
    });

    console.log('USER:' , user);
    console.log('SESSION: ', session);
    console.log('ERROR:', error);
    return jsonResponse({ body: session?.access_token, status: 200 });
  } catch (err) {
    console.log(err);
    return jsonResponse({ body: err, status: 400 });
  }
};
