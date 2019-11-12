from django.shortcuts import render
from dammin import settings


def IndexView(request):
    return render(request, 'web/index.html', {'settings': settings})
