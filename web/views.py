from django.shortcuts import render
from dammin import settings
from web.models import Comment
from django_datatables_view.base_datatable_view import BaseDatatableView
from django.utils.html import escape
from django.db.models import Q


class CommentListJson(BaseDatatableView):
    model = Comment
    columns = ['name', 'content', 'created']
    order_columns = ['created']
    max_display_length = 500

    def render_column(self, row, column):
        # We want to render user as a custom column
        if column == 'user':
            # escape HTML for security reasons
            return escape('{0} {1}'.format(row.customer_firstname, row.customer_lastname))
        else:
            return super(CommentListJson, self).render_column(row, column)


def IndexView(request):
    return render(request, 'web/index.html', {'settings': settings, 'object': object})
