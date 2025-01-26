from django.urls import path
from .views import home, process_video, get_questions

urlpatterns = [
    path("", home, name="home"),  # Home endpoint
    path("process/", process_video, name="process_video"),  # Process video endpoint
    path("questions/", get_questions, name="get_questions"),  # Questions endpoint
]
