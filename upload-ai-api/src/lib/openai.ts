import 'dotenv/config'
import { OpenAI } from 'openai'

export const openai = new OpenAI ({
  organization: "org-XPp2Mwl1OWkApZ8SvIv9EABQ",
  apiKey: process.env.OPENAI_KEY,
})