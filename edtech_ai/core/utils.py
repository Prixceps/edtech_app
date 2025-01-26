import requests
from transformers import T5ForConditionalGeneration, T5Tokenizer

# Load the model and tokenizer
model_name = "t5-base"
tokenizer = T5Tokenizer.from_pretrained(model_name)
model = T5ForConditionalGeneration.from_pretrained(model_name)


def get_video_transcript(video_url):
    # Placeholder function (Replace with actual YouTube transcript extraction)
    return "This is a sample transcript of the video about AI."


def summarize_text(text):
    input_text = "summarize: " + text
    input_ids = tokenizer.encode(input_text, return_tensors="pt", max_length=512, truncation=True)

    summary_ids = model.generate(input_ids, max_length=150, num_return_sequences=1)
    summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)

    return summary


def generate_questions(summary):
    input_text = "generate questions: " + summary
    input_ids = tokenizer.encode(input_text, return_tensors="pt", max_length=512, truncation=True)

    question_ids = model.generate(input_ids, max_length=150, num_return_sequences=3)
    questions = [tokenizer.decode(q, skip_special_tokens=True) for q in question_ids]

    return questions
