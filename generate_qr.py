import qrcode
import os

# Create output folder
output_folder = "qr_codes"
os.makedirs(output_folder, exist_ok=True)

# Campaign code
campaign = "sz26"

# URL to encode
url = f"https://qr.petitek.com/{campaign}"

# Create QR
qr = qrcode.QRCode(
    version=None,
    error_correction=qrcode.constants.ERROR_CORRECT_H,   # Highest error correction
    box_size=20,                                         # High resolution
    border=4                                             # Standard quiet zone
)

qr.add_data(url)
qr.make(fit=True)

# Create image
img = qr.make_image(fill_color="black", back_color="white")

# Save
filename = os.path.join(output_folder, f"{campaign}.png")
img.save(filename)

print("=====================================")
print("QR Code Generated Successfully")
print("=====================================")
print("Campaign :", campaign)
print("URL      :", url)
print("Saved To :", filename)
print("=====================================")
