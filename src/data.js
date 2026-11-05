export const STATS = [['20%', 'Commission, on closed deals only'], ['$0', 'Retainer or signup fee'], ['50 / 50', 'Payment split, written in the contract'], ['14', 'Creators on our roster']]
export const TICKER = ['Instagram', 'Facebook', 'UGC for ads', 'Whitelisting', 'Spark Ads', 'Reels', 'Long-form', 'YouTube', 'TikTok']

export const BRAND_CHECKS = ['Shortlist by niche, region and audience data', 'Signed contract before any content', 'Approve the draft before it goes live', 'Usage rights and UGC for ads agreed per brief']
export const CREATOR_CHECKS = ['No signup fee. You keep 80% of every deal', 'Non-exclusive: work with other brands too', 'Contract and payment dates agreed in writing', 'You approve your listing and past brands shown']
export const CREATOR_SPLIT = ['No signup fee. We earn 20% only when a deal closes; you keep 80%.', 'Non-exclusive. Keep working with other brands and agencies.', 'Contract first: deliverables, usage rights and payment dates are agreed in writing before you start.', 'You approve your listing, including which details and past brands we show.']

export const REAL_BRAND = { title: 'If you are a brand', items: ['You want creator content but do not want to pay a retainer before you know it works.', 'You are unsure which creators fit your niche and audience.', 'You have been burned by unclear terms, missing drafts or late delivery.', 'You want UGC for your own ad accounts, not just posts on a creator’s page.'] }
export const REAL_CREATOR = { title: 'If you are a creator', items: ['You spend more time chasing brands than creating.', 'You have worked for brands that paid late or not at all.', 'You are not sure what a fair rate or usage right looks like.', 'You want brand deals without signing away exclusivity.'] }

export const FEATURES = [
  ['Matching by niche and audience', 'We shortlist creators by niche, audience location and engagement, and share audience data before you decide.', ['Brand']],
  ['Contract-first deals', 'Deliverables, usage rights and payment dates are signed before any content is made.', ['Brand', 'Creator'], 'both'],
  ['Long-form and short-form', 'YouTube integrations, TikToks, Instagram reels, Facebook video, posts and stories.', ['Brand']],
  ['UGC for paid ads', 'Creator-made video for your own ad accounts, with whitelisting or Spark Ads agreed per brief.', ['Brand']],
  ['Draft approval', 'Nothing goes live without the brand approving the draft first.', ['Brand']],
  ['Payment follow-up', 'We chase the payments so creators can focus on creating, on the dates written in the contract.', ['Creator'], 'creator'],
]
export const STEPS = [
  ['Send a brief', 'Tell us about the product, platforms, regions and budget. Two minutes, no call needed.'],
  ['Review a shortlist', 'We match creators by niche, audience location and engagement, and share their audience data.'],
  ['Contract, then content', 'Scope, usage rights and payment dates are signed first. The creator sends a draft and you approve it.'],
  ['Publish and pay', '50% before publishing, 50% within 30 to 45 days after. NexVance’s 20% comes out of that fee.'],
]
export const TIMELINE = [
  ['Contract signed', 'Deliverables, usage rights and payment dates are agreed in writing.'],
  ['50% paid, draft approved', 'Nothing goes live without the brand’s approval.'],
  ['Published, remaining 50% in 30 to 45 days', 'The creator receives 80% of the fee and NexVance keeps 20%.'],
]
export const CREATORS = [
  { name: 'Kori Jane Spaulding', handle: '@korijanes', niche: 'Books, poetry and writing', audience: '1.3M TikTok, 804K+ Instagram', region: 'United States', platforms: ['TikTok', 'Instagram'], photo: 'creator-01' },
  { name: 'Lukas Lakutsin', handle: '@lucaslakutsin', niche: 'Fitness and sports nutrition', audience: '3.2M+ TikTok, 1.7M+ Instagram', region: 'United States', platforms: ['TikTok', 'Instagram'], photo: 'creator-02' },
  { name: 'Dr. Morissa Schwartz', handle: '@morissaschwartz', niche: 'AI, productivity, writing and publishing', audience: '500K+ combined', region: 'United States', platforms: ['TikTok', 'Instagram'], photo: 'creator-03' },
  { name: 'Malachi (Worldwide Mal)', handle: '@worldwidemal', niche: 'UGC, lifestyle, travel and tech', audience: '48K+ TikTok, 10K+ Instagram', region: 'United States', platforms: ['TikTok', 'Instagram', 'UGC'], photo: 'creator-05' },
]
export const FILTERS = ['All', 'YouTube', 'TikTok', 'Instagram', 'Facebook', 'UGC']
export const NICHES = ['Tech and gadgets', 'SaaS and AI tools', 'Gaming', 'Fitness and wellness', 'Beauty', 'Food and beverage', 'Home', 'Travel', 'Finance', 'Fashion', 'Family', 'Books and writing']
export const FOR_YES = ['You want creator content and are happy to pay only when a deal closes.', 'You can share a clear brief: product, platforms, regions and budget.', 'You are comfortable signing a contract before content is made.', 'You want to approve drafts before anything goes live.']
export const FOR_NO = ['You want a guaranteed number of views or sales.', 'You want to start posting before a contract is signed.', 'You are looking for a monthly retainer agency.', 'You want exclusivity with a single creator.']
export const FOUNDER = [
  'NexVance is a small agency run by Muhammad Haseeb. There is no layer of account managers between you and the person who picks your creators.',
  'The idea came from watching brands and creators lose money on the same few problems: unclear terms, missing drafts, late payments and shortlists nobody could explain.',
  'So the contract comes first, the audience data is shared, and we only earn when a deal closes.',
  'None of this is complicated. It just kept stacking up.',
]
export const FAQ = [
  ['What does NexVance charge?', 'We take 20% of each closed deal, and only when a deal closes. There is no retainer, no signup fee and no monthly cost. For brands, the 20% comes out of the agreed fee, not on top of it.'],
  ['Do brands pay anything upfront?', 'Brands pay 50% once the contract is signed and the draft is approved, before the creator publishes. The other 50% follows within 30 to 45 days. NexVance’s 20% comes out of that fee.'],
  ['Are creators exclusive to NexVance?', 'No. Creators stay non-exclusive and can keep working with other brands and agencies.'],
  ['Which platforms and regions do you cover?', 'YouTube, TikTok, Instagram and Facebook, including UGC for paid ads. Put your target regions in the brief and we will match creators by audience location.'],
]
export const BRIEF_FIELDS = [
  { label: 'Your name', placeholder: 'Full name' },
  { label: 'Work email', placeholder: 'you@brand.com', type: 'email' },
  { label: 'Brand and product', placeholder: 'What do you sell?' },
  { label: 'Platforms', choices: ['YouTube', 'TikTok', 'Instagram', 'Facebook', 'UGC for ads'] },
  { label: 'Target regions', placeholder: 'Where is your audience?' },
  { label: 'Budget', placeholder: 'Your budget for this campaign' },
  { label: 'Anything else?', placeholder: 'Usage rights, UGC for ads, timing…', area: true },
]
export const APPLY_FIELDS = [
  { label: 'Your name', placeholder: 'Full name' },
  { label: 'Email', placeholder: 'you@email.com', type: 'email' },
  { label: 'Social handles', placeholder: '@yourhandle on each platform' },
  { label: 'Platforms', choices: ['YouTube', 'TikTok', 'Instagram', 'Facebook', 'UGC for ads'] },
  { label: 'Niche', placeholder: 'What do you create about?' },
  { label: 'Audience size and region', placeholder: 'Followers per platform, and where they are' },
  { label: 'Anything else?', placeholder: 'Past brands, rates, what you want to work on…', area: true },
]
