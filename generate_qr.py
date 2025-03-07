import qrcode
import os

# Create a folder to store QR codes
output_folder = "qr_codes"
os.makedirs(output_folder, exist_ok=True)

# List of test serial numbers
test_serial_numbers = ["TEST001", "TEST002", "TEST003", "TEST004", "TEST005"]

# Generate QR codes for each test serial number
for serial_number in test_serial_numbers:
    url = f"https://qr.petitek.com/{serial_number}"  # Updated URL for registration

    # Generate QR Code
    qr = qrcode.QRCode(box_size=10, border=4)  # Adjust size if needed
    qr.add_data(url)
    qr.make(fit=True)

    # Save as PNG
    qr_img = qr.make_image(fill="black", back_color="white")
    qr_img.save(f"{output_folder}/qr_{serial_number}.png")

    print(f"Generated QR Code: {output_folder}/qr_{serial_number}.png")

print("Test QR codes created successfully!")
