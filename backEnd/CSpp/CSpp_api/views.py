from django.shortcuts import render
from rest_framework import viewsets
from .serializers import pp_api_Serializer
from .models import pp_api
# Create your views here.

class pp_api_View(viewsets.ModelViewSet):
    serializer_class = pp_api_Serializer;
    queryset = pp_api.objects.all();

