import phonenumbers
from phonenumbers import geocoder

# Example: Indian number
phone_number1 = phonenumbers.parse("+919550692353")  

print("\nPhone Number Location\n")
print(geocoder.description_for_number(phone_number1, "en"))
