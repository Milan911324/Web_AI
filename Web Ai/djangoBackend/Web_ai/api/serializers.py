from rest_framework import serializers
from .models import User,Converctionque,Converctionans,AIInformation

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = "__all__"
    
class ConverctionqueSerializer(serializers.ModelSerializer):
    class Meta:
        model=Converctionque
        fields="__all__"
        
class ConverctionansSerializer(serializers.ModelSerializer):
    class Meta:
        model=Converctionans
        fields="__all__"
        
class AIInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model=AIInformation
        fields="__all__"
        