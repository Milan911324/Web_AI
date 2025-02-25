# Generated by Django 5.1.1 on 2024-09-21 15:46

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0005_converctionans_converctionque_delete_converction"),
    ]

    operations = [
        migrations.CreateModel(
            name="AIInformation",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.TextField()),
                ("type", models.TextField()),
                ("usage", models.TextField()),
                ("modelofai", models.TextField()),
                ("popularity", models.TextField()),
                ("linktodetail", models.TextField()),
                ("company", models.TimeField()),
                ("launchyear", models.TextField()),
                ("supportlang", models.TextField()),
                ("apiaccess", models.TextField()),
                ("custmization", models.TextField()),
                ("speed", models.TextField()),
                ("trainingdata", models.TextField()),
                ("realtimecapabilities", models.TextField()),
                ("ethicalconsiderations", models.TextField()),
                ("integration", models.TextField()),
                ("userbase", models.TextField()),
                ("trainingmethodology", models.TextField()),
                ("datasize", models.TextField()),
                ("hardwerrequired", models.TimeField()),
                ("energyconsumption", models.TextField()),
                ("maintenanceupdates", models.TextField()),
                ("securityfeatures", models.TimeField()),
                ("opensource", models.TextField()),
                ("scalability", models.TextField()),
                ("userfeedback", models.TimeField()),
                ("limitations", models.TimeField()),
            ],
        ),
    ]
