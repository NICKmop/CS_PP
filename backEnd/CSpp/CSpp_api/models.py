from django.db import models

# Create your models here.
class pp_api(models.Model):
    name = models.TextField();

    def __str__(self) -> str:
        return "111111 : "+ self.name;

