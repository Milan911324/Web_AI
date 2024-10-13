from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User, Converctionque, Converctionans,AIInformation
from rest_framework import status, viewsets
from .serializers import UserSerializer,ConverctionqueSerializer, ConverctionansSerializer,AIInformationSerializer
import google.generativeai as genai
# from django.conf import settings

# Configure the Gemini AI with your API key
genai.configure(api_key="AIzaSyDEbL67tnCrUaGycwittadr4gkqo92Gz6w")
version='models/gemini-1.5-flash'
model=genai.GenerativeModel(version)

# User ViewSet for managing users
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# ViewSet for Convertionque model
class ConvertionqueViewSet(viewsets.ModelViewSet):
    queryset = Converctionque.objects.all()
    serializer_class = ConverctionqueSerializer

# ViewSet for Convertionans model
class ConvertionansViewSet(viewsets.ModelViewSet):
    queryset = Converctionans.objects.all()
    serializer_class = ConverctionansSerializer

class AIInformationViewSet(viewsets.ModelViewSet):
    queryset = AIInformation.objects.all()
    serializer_class = AIInformationSerializer


@api_view(['POST', 'GET'])
def user_data(request):
    if request.method == 'POST':
        email = request.data.get('email')
        password = request.data.get('password')

        user = User.objects.create(email=email, password=password)
        return Response({"message": "User data saved", "email": email})

    elif request.method == 'GET':
        users = User.objects.all()
        user_list = [{"email": use.email} for use in users]  # Do not return password for security
        return Response({"users": user_list})

@api_view(['POST', 'GET'])
def converction_data(request):
    if request.method == 'POST':
        try:
            question = request.data.get('question')

            if not question:
                return Response({"error": "No question provided"}, status=status.HTTP_400_BAD_REQUEST)

            # Use Gemini AI to get a response
            response = model.generate_content(question)

            # Check if the response is valid and contains the expected content
            if response and hasattr(response, 'text'):
                answer = response.text  # Assuming response has an attribute 'text'
            else:
                return Response({"error": "Failed to get a valid response from AI model"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

            # Ensure data is saved after AI response is fully processed
            answer_instance = Converctionans(answer=answer)
            answer_instance.save()  # Save the instance to the database

            question_instance = Converctionque(question=question)
            question_instance.save()  # Save the instance to the database

            return Response({"message": "Convertion data saved", "question": question, "answer": answer}, status=status.HTTP_201_CREATED)

        except Exception as e:
            # Log the exception for debugging purposes
            print(f"Error occurred: {str(e)}")
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    elif request.method == 'GET':
        try:
            # Fetch all saved answers
            answers = Converctionans.objects.all()
            answers_list = [{"answer": ans.answer} for ans in answers]

            return Response({"answers": answers_list})

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
@api_view(['POST', 'GET'])
def ai_information(request):
    if request.method == 'POST':
        # Extracting data from the request
        name = request.data.get('name')
        type_of_ai = request.data.get('type')
        usage = request.data.get('usage')
        model_of_ai = request.data.get('modelofai')
        popularity = request.data.get('popularity')
        link_to_detail = request.data.get('linktodetail')
        company = request.data.get('company')
        launch_year = request.data.get('launchyear')
        support_lang = request.data.get('supportlang')
        api_access = request.data.get('apiaccess')
        customization = request.data.get('custmization')
        speed = request.data.get('speed')
        training_data = request.data.get('trainingdata')
        realtime_capabilities = request.data.get('realtimecapabilities')
        ethical_considerations = request.data.get('ethicalconsiderations')
        integration = request.data.get('integration')
        user_base = request.data.get('userbase')
        training_methodology = request.data.get('trainingmethodology')
        data_size = request.data.get('datasize')
        hardware_required = request.data.get('hardwerrequired')
        energy_consumption = request.data.get('energyconsumption')
        maintenance_updates = request.data.get('maintenanceupdates')
        security_features = request.data.get('securityfeatures')
        open_source = request.data.get('opensource')
        scalability = request.data.get('scalability')
        user_feedback = request.data.get('userfeedback')
        limitations = request.data.get('limitations')
        cost_of_month = request.data.get('costofmonth')

        # Creating a new AIInformation object
        ai_info = AIInformation.objects.create(
            name=name,
            type=type_of_ai,
            usage=usage,
            modelofai=model_of_ai,
            popularity=popularity,
            linktodetail=link_to_detail,
            company=company,
            launchyear=launch_year,
            supportlang=support_lang,
            apiaccess=api_access,
            custmization=customization,
            speed=speed,
            trainingdata=training_data,
            realtimecapabilities=realtime_capabilities,
            ethicalconsiderations=ethical_considerations,
            integration=integration,
            userbase=user_base,
            trainingmethodology=training_methodology,
            datasize=data_size,
            hardwerrequired=hardware_required,
            energyconsumption=energy_consumption,
            maintenanceupdates=maintenance_updates,
            securityfeatures=security_features,
            opensource=open_source,
            scalability=scalability,
            userfeedback=user_feedback,
            limitations=limitations,
            costofmonth=cost_of_month
        )

        # Return a success response
        return Response({"message": "AI Information saved", "name": name})

    elif request.method == 'GET':
        # Retrieve all AIInformation objects
        ai_info = AIInformation.objects.all()

        # Return the list of AI Information with all fields
        ai_info_list = [{
            "name": info.name,
            "type": info.type,
            "usage": info.usage,
            "modelofai": info.modelofai,
            "popularity": info.popularity,
            "linktodetail": info.linktodetail,
            "company": info.company,
            "launchyear": info.launchyear,
            "supportlang": info.supportlang,
            "apiaccess": info.apiaccess,
            "custmization": info.custmization,
            "speed": info.speed,
            "trainingdata": info.trainingdata,
            "realtimecapabilities": info.realtimecapabilities,
            "ethicalconsiderations": info.ethicalconsiderations,
            "integration": info.integration,
            "userbase": info.userbase,
            "trainingmethodology": info.trainingmethodology,
            "datasize": info.datasize,
            "hardwerrequired": info.hardwerrequired,
            "energyconsumption": info.energyconsumption,
            "maintenanceupdates": info.maintenanceupdates,
            "securityfeatures": info.securityfeatures,
            "opensource": info.opensource,
            "scalability": info.scalability,
            "userfeedback": info.userfeedback,
            "limitations": info.limitations,
            "costofmonth": info.costofmonth
        } for info in ai_info]

        return Response({"ai_information": ai_info_list})
