CREATE TABLE public.trial_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  shop_name TEXT,
  email TEXT,
  note TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
GRANT INSERT ON public.trial_signups TO anon, authenticated;
GRANT ALL ON public.trial_signups TO service_role;
ALTER TABLE public.trial_signups ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a trial signup" ON public.trial_signups FOR INSERT TO anon, authenticated WITH CHECK (true);