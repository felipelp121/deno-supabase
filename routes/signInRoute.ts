import { ParamsDTO } from "../dtos/mod.ts";
import { jsonResponse } from "../utils/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js"

type SignInDTO = {
  email: string;
  password: string;
};

export const signInRoute = async (request: Request, params: ParamsDTO) => {
  try {
    const body: SignInDTO = await request.json();
    const email = body.email;
    const password = body.password;
    
    const db_url = Deno.env.get('DB_URL');

    const db_public_key = Deno.env.get('PUBLIC_KEY');

    const db_secret_key = Deno.env.get('SECRET_KEY');

    if (
      !(db_url && db_public_key && db_secret_key)
    ) {
      throw "Faltam keys";
    }
  
    const supabase = createClient(
      db_url,
      db_public_key,
    );
    console.log('Supabase: ', supabase);
    const { user, session, error } = await supabase.auth.signIn({
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
