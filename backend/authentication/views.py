from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from django.http import JsonResponse
from django.contrib.auth.models import User

class HomeView(APIView):
    permission_classes = (IsAuthenticated, )

    def get(self, request):
        content = {'message': 'Welcome to the JWT Authentification page using React Js and Django!'}
        return Response(content)



class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)
    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()

            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
class SignView(APIView):
    def post(self, request):
        if "username" in request.data and "password" in request.data and "email" in request.data:
            username = request.data["username"]
            password = request.data["password"]
            email = request.data["email"]

            user = User.objects.create_user(username=username, email=email, password=password)

            return JsonResponse({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
        else:
            return JsonResponse({'message': 'Invalid Request!'}, status=400)