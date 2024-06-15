import { OpenAI } from 'openai'
import { encoding_for_model } from 'tiktoken'

const openai = new OpenAI()

async function main() {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: 'How tall is Mount Everest?',
      },
    ],
  })

  console.log(response.choices[0].message.content)
}

function encodePrompt() {
  const inputPrompt = 'How is the weather in Singapore today?'
  const words = encoding_for_model('gpt-3.5-turbo').encode(inputPrompt)
  console.log(words)
}

main()

encodePrompt()
