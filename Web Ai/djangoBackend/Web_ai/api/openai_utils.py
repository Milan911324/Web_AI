import openai
from django.conf import settings

# Set the OpenAI API key globally
openai.api_key = settings.OPENAI_API_KEY

def generate_openai_response(prompt):
    try:
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=prompt,
            max_tokens=100
        )
        return response.choices[0].text.strip()
    except openai.error.OpenAIError as e:
        raise e
