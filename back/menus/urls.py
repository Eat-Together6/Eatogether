from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
<<<<<<< HEAD

=======
>>>>>>> feature/boards
from menus import views

urlpatterns = [
    path('menus/', views.MenuView.as_view()),
    path('menus/<int:pk>/', views.MenuDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
