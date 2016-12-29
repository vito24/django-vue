# -*- coding: utf-8 -*-

from django.template import Context, RequestContext
from django.shortcuts import render_to_response, render

def index(request):
	"""
	index page
	"""

	c = RequestContext(request, {	

	})
	return render_to_response('myapp/index.html', c)