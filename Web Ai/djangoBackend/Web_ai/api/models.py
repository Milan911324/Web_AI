from django.db import models

# Create your models here.
class User(models.Model):
    email=models.EmailField()
    password=models.CharField(max_length=128)
    
    def __str__(self):
        return self.email
    
class Converctionque(models.Model):
    question=models.TextField()
    # answer=models.TextField()
    
    def __str__(self):
        return self.question
    
class Converctionans(models.Model):
    answer=models.TextField()
    
    def __str__(self):
        return self.answer
    
class AIInformation(models.Model):
    name=models.CharField(max_length=50)
    type=models.TextField()
    usage=models.TextField()
    modelofai=models.TextField()
    popularity=models.TextField()
    linktodetail=models.TextField()
    company=models.TextField()
    launchyear=models.TextField()
    supportlang=models.TextField()
    apiaccess=models.TextField()
    custmization=models.TextField()
    speed=models.TextField()
    trainingdata=models.TextField()
    realtimecapabilities=models.TextField()
    ethicalconsiderations=models.TextField()
    integration=models.TextField()
    userbase=models.TextField()
    trainingmethodology=models.TextField()
    datasize=models.TextField()
    hardwerrequired=models.TextField()
    energyconsumption=models.TextField()
    maintenanceupdates=models.TextField()
    securityfeatures=models.TextField()
    opensource=models.TextField()
    scalability=models.TextField()
    userfeedback=models.TextField()
    limitations=models.TextField()
    costofmonth=models.CharField(max_length=200,default='0')
    
    def __str__(self):
        return self.name
    
    
         