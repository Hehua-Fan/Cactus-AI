import openai
from .settings import OPENAI_API_KEY

openai.api_key = OPENAI_API_KEY

def generate_search_query(prompt):
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=50,
        n=1,
        stop=None,
        temperature=0.5
    )
    search_query = response.choices[0].text.strip()
    return search_query
