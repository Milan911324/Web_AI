import google.generativeai as genai

# Configure your Gemini API key
genai.configure(api_key="AIzaSyDEbL67tnCrUaGycwittadr4gkqo92Gz6w")  # Replace with your actual API key
version='models/gemini-1.5-flash'
model=genai.GenerativeModel(version)
prompt="What is Ai?"
respones=model.generate_content(prompt)
print(respones.text)