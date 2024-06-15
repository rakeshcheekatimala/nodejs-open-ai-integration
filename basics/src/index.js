import {OpenAI} from 'openai';

// To test whether key is working 

const openai = new OpenAI();

async function main(){
    const response = await openai.chat.completions.create({
        model:'gpt-3.5-turbo',
        messages:[
            {
                role:'user',
                content:'How tall is Mount Everest?'
            }
        ]
    });

    console.log(response.choices[0].message.content)
}

main();