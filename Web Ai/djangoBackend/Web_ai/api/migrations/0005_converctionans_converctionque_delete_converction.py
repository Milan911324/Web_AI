# Generated by Django 5.1.1 on 2024-09-20 19:57

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0004_alter_converction_answer"),
    ]

    operations = [
        migrations.CreateModel(
            name="Converctionans",
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
                ("answer", models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name="Converctionque",
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
                ("question", models.TextField()),
            ],
        ),
        migrations.DeleteModel(
            name="Converction",
        ),
    ]
