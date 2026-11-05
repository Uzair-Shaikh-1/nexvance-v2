import * as S from '../components/sections'
import { Section, Pill, BriefForm } from '../components/ui'
import * as D from '../data'

const BriefCta = () => (
  <S.FinalCta to="/for-brands#brief" label="Get a creator shortlist">Send the brief. See the terms. <span className="is-gray">Then decide.</span></S.FinalCta>
)
const ApplyCta = () => (
  <S.FinalCta to="/for-creators#apply" label="Apply to join the roster">You decide which deals you take.</S.FinalCta>
)
const creatorSplit = (h1) => (
  <S.Split h1={h1} pill="For creators" title="You decide which deals you take." text="We pitch you to brands that fit your audience, and handle the contract and the payment chasing." button="Apply to join the roster" to="/for-creators#apply" items={D.CREATOR_SPLIT} />
)

export const Home = () => (
  <>
    <S.Hero /><S.Stats /><S.Ticker /><S.WhoFor />
    <S.LetsGetReal cols={[D.REAL_BRAND, D.REAL_CREATOR]} />
    <S.WhatYouGet /><S.HowItWorks /><S.OnePrice /><S.Roster /><S.Niches />
    {creatorSplit(false)}
    <S.ForYou /><S.Founder /><S.FaqSection /><BriefCta />
  </>
)

export const HowItWorksPage = () => (<><S.HowItWorks /><S.OnePrice /><S.WhatYouGet /><BriefCta /></>)

export const ForBrands = () => (
  <>
    <S.Split h1 pill="For brands" title="Creator campaigns without the retainer" text="Tell us what you sell and who you want to reach. We shortlist creators and you only pay when a deal closes." button="Get a shortlist" to="/for-brands#brief" items={D.BRAND_CHECKS} />
    <Section tone="black" id="brief">
      <Pill>The brief</Pill>
      <h2 className="h2">Send the brief. See the terms.</h2>
      <p className="lead">Tell us about the product, platforms, regions and budget. Two minutes, no call needed.</p>
      <BriefForm items={D.BRIEF_FIELDS} button="Get a creator shortlist" note="One-time brief. Two minutes. No call needed." />
    </Section>
    <S.LetsGetReal cols={[D.REAL_BRAND]} />
    <S.ForYou /><BriefCta />
  </>
)

export const ForCreators = () => (
  <>
    {creatorSplit(true)}
    <S.LetsGetReal cols={[D.REAL_CREATOR]} />
    <Section tone="black" id="apply">
      <Pill>Apply</Pill>
      <h2 className="h2">Apply to join the roster</h2>
      <p className="lead">No signup fee. You keep 80% of every deal, and you approve your listing.</p>
      <BriefForm items={D.APPLY_FIELDS} button="Apply to join the roster" note="Non-exclusive: you can keep working with other brands." />
    </Section>
    <ApplyCta />
  </>
)

export const CreatorsPage = () => (<><S.Roster /><S.Niches /><ApplyCta /></>)
export const About = () => (<><S.Founder /><S.Stats /><S.Ticker /><BriefCta /></>)
