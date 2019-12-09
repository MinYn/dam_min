import json
from django.shortcuts import render
from dammin import settings
from web.models import Comment
from django_datatables_view.base_datatable_view import BaseDatatableView
from django.utils.html import escape
from django.db.models import Q
from django.views.generic import *
from django.forms.formsets import *
from django.forms.forms import *
from django.http import HttpResponse
from datetime import datetime
from django.utils import timezone


class CommentList(TemplateView):
    """
    댓글 기능 Viewset
    """
    template_name = "web/commentlist.html"
    page_per_number = 3

    def get(self, request, *args, **kwargs):
        page = request.GET.get('page', None)
        start = int(page) * self.page_per_number
        end = (int(page) * self.page_per_number) + self.page_per_number
        self.extra_context = {
            "comment": Comment.objects.all().order_by('-created')[start:end],
            "page_per_number": self.page_per_number,
        }
        context = self.get_context_data(**kwargs)
        return self.render_to_response(context)

    def post(self, request, *args, **kwargs):
        mode = request.POST.get('mode', None)
        if mode == 'new':
            name = request.POST.get('name', None)
            password = request.POST.get('password', None)
            content = request.POST.get('content', None)
            try:
                Comment.objects.create(name=name, password=password, content=content, created=timezone.localtime())
                return HttpResponse('1')
            except:
                return HttpResponse('3')
        elif mode == 'edit':
            id = request.POST.get('id', None)
            name = request.POST.get('name', None)
            password = request.POST.get('password', None)
            content = request.POST.get('content', None)
            try:
                comment = Comment.objects.get(id=id, password=password)
                comment.name = name
                comment.content = content
                comment.created = timezone.localtime()
                comment.save()
                return HttpResponse('1')
            except Comment.DoesNotExist:
                return HttpResponse('2')
            except:
                return HttpResponse('3')
        elif mode == 'delete':
            id = request.POST.get('id', None)
            password = request.POST.get('password', None)
            try:
                comment = Comment.objects.get(id=id, password=password)
                comment.delete()
                return HttpResponse('1')
            except Comment.DoesNotExist:
                return HttpResponse('2')
            except:
                return HttpResponse('3')


def IndexView(request):
    return render(request, 'web/index.html', {'settings': settings})


def PlayerView(request):
    return render(request, 'web/player.html', {})
