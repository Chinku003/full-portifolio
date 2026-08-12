import json

from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from .models import User

def home_view(request):
    return HttpResponse(
        '<h1>Welcome to the API</h1><p>The contact endpoint is available at /api/contact/.</p>'
    )


@csrf_exempt
@require_http_methods(["GET", "POST"])
def contact_view(request):
    content_type = request.content_type or ''
    data = {}

    if request.body:
        try:
            parsed_body = json.loads(request.body.decode('utf-8'))
            if isinstance(parsed_body, dict):
                data = parsed_body
        except (json.JSONDecodeError, UnicodeDecodeError):
            data = {}

    if not data:
        data = request.POST.dict()

    if not data:
        data = request.GET.dict()

    name = str(data.get('name', '')).strip()
    email = str(data.get('email', '')).strip()
    message = str(data.get('message', '')).strip()

    print('Received payload:', {
        'content_type': content_type,
        'body': request.body.decode('utf-8', errors='ignore'),
        'name': name,
        'email': email,
        'message': message,
    })

    if not name or not email or not message:
        return JsonResponse(
            {'success': False, 'message': 'Please fill in all fields.'},
            status=400,
        )

    user = User.objects.create(
        username=name,
        email=email,
        message=message,
    )

    return JsonResponse(
        {
            'success': True,
            'message': 'Message received successfully.',
            'data': {'name': name, 'email': email, 'message': message},
            'received': {
                'name': name,
                'email': email,
                'message': message,
            },
            'user_id': user.id,
        }
    )