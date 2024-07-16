import openai
import os
from dotenv import load_dotenv

load_dotenv()

OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

system_prompt = "You are a helpful assistant"

user_prompt = "What is the weather today?"


response = openai.chat.completions.create(
        api_key = OPENAI_API_KEY,
        model = "glm-4",
        messages=[
            {"role":"system", "content":system_prompt},
            {"role":"user", "content":user_prompt}
        ],
        top_p=0.7,
        temperature=0.9,
        response_format= { "type": "json_object" }
    )
    
meassage = response.choices[0].message.content

print(meassage)